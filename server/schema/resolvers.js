const { AuthenticationError } = require("apollo-server-express");
const { User, Category, Item, Rental } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    items: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }
      if (name) {
        params.name = {
          $regex: name,
        };
      }
      return await Item.find(params).populate("category");
    },
    // item: async (parent, { _id }) => {
    //   return await Item.findById(_id).populate("category");
    // },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "rentals.item",
          populate: "category",
        });
        // user.rental.sort((a, b) => b.rentaldate - a.rentalDate);
        return user;
      }
    //   throw new AuthenticationError("Not Logged in, sorry");
    },
    // rental: async (parent, { _id }, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: "rentals.items",
    //       populate: "category",
    //     });
    //     return user.rentals.id(_id);
    //   }
    //   throw new AuthenticationError("Not Logged in, sorry, not sorry.");
    // },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // addRental: async (parent, { items }, context) => {
    //   console.log(context);
    //   if (context.user) {
    //     const rental = new Rental({ items });
    //     await User.findByIdAndUpdate(context.user.id, {
    //       $push: { rentals: rental },
    //     });
    //     return rental;
    //   }
    //   throw new AuthenticationError("Not Logged in, silly");
    // },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
