const { AuthenticationError } = require("apollo-server-express");
const { User, Category, Rental, Order } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    category: async (parent, { _id }) => {
      return await Category.findById(_id);
    },
    categories: async () => {
      return await Category.find();
    },
    rentals: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }
      if (name) {
        params.name = {
          $regex: name,
        };
      }
      return await Rental.find(params).populate("category");
    },
    rental: async (parent, { _id }) => {
      return await Rental.findById(_id).populate("category");
    },
    user: async (parent, { _id }) => {
      const user = await User.find();

      return user;
    },
    // throw new AuthenticationError("Not Logged in, sorry");
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findbyId(context.user._id);
      }
      return user.order.id(_id);
      // throw new AuthenticationError("Not Logged in, sorry, not sorry.");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },

    addOrder: async (parent, { rentals }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ rentals });
        await User.findByIdAndUpdate(context.user.id, {
          $push: { orders: order },
        });
        return order;
      }
      // throw new AuthenticationError("Not Logged in, silly");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }

      // throw new AuthenticationError("Not logged in");
    },
    updateRental: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;
      return await Rental.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
