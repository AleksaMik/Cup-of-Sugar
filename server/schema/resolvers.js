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
    users: async () => {
      return User.find().populate('orders');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("orders");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("orders");
      }
    },
    // throw new AuthenticationError("Not Logged in, sorry");
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findbyId(context.user._id).populate({
          path: "orders.rentals",
          populate: "category",
        });
        return user.orders.id(_id);
        // throw new AuthenticationError("Not Logged in, sorry, not sorry.");
      }
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
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
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Wrong credentials");
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Wrong credentials");
      }
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
