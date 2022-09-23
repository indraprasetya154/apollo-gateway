import Abilities from "../models/abilities.js";
import Categories from "../models/categories.js";
import Heroes from "../models/heroes.js";

const resolvers = {
    Query: {
        heroes: async() => { 
            return Heroes.findAll({ include: [
                {
                    model: Categories,
                    required: true
                },
                {
                    model: Abilities
                }
            ] })
        },
        hero: async(parent, args, context, info) => {
            return Heroes.findByPk(args.id, { include: [
                {
                    model: Categories,
                    required: true
                },
                {
                    model: Abilities
                }
            ] });
        }
    },
    Mutation: {
        addHero: async (parent, args, context, info) => {
            const hero = await Heroes.create({
                categoryId: args.input.categoryId,
                name: args.input.name,
                health: args.input.health,
                mana: args.input.mana,
            },{
                include: [
                    {
                        model: Categories,
                        required: true
                    },
                    {
                        model: Abilities
                    }
                ]
             })

            if (hero) {
                return hero
            }
        },
    }
    // Hero: {
    //     category: async (parent, args, context, info) => Categories.findByPk(parent.categoryId),
    //     abilities: async (parent, args, context, info) => Abilities.findAll({ where: { heroId: parent.id } })
    // }
};

export default resolvers