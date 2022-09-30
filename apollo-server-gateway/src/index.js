import 'dotenv/config'
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import cors from "cors";
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import morgan from 'morgan'
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';
import { CategoryAPI } from './graphql/data_sources/category.js';

const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const isDevelopment = NODE_ENV === 'development'

    if (isDevelopment) {
        app.use(morgan('dev'))
    }

    app.use(cors());
    app.use(
        helmet({
          crossOriginEmbedderPolicy: !isDevelopment,
          contentSecurityPolicy: !isDevelopment,
        }),
      )

    app.get('/', (req, res) => {
        res.status(200).json({
            app: process.env.APP_NAME,
            version: process.env.VERSION,
        });
    });

    const httpServer = http.createServer(app);
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      dataSources: () => {
        return {
          categoryAPI: new CategoryAPI(),
        };
      },
    });

    await server.start();
    server.applyMiddleware({ app });
    await new Promise(resolve => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

await startApolloServer(typeDefs, resolvers);