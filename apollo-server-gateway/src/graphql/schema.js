import { gql } from 'apollo-server-express';

const typeDefs = gql`
    enum CacheControlScope {
      PUBLIC
      PRIVATE
    }

    directive @cacheControl(
      maxAge: Int
      scope: CacheControlScope
      inheritMaxAge: Boolean
    ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION

    type Category {
        id: ID!
        name: String!
    }

    type Hero {
        id: ID!
        category: Category!
        name: String
        health: Int
        mana: Int
        createdAt: String
        abilities: [Ability!]
    }

    type Ability {
        id: ID!
        heroId: ID!
        ability: String @cacheControl(maxAge: 30)
    }

    input AddHeroInput {
        categoryId: Int!
        name: String!
        health: Int
        mana: Int
    }

    type Query {
        heroes: [Hero]
        hero(id: ID!): Hero
        categories: Category
    }

    type Mutation {
        addHero(input: AddHeroInput): Hero
    }
`;

export default typeDefs