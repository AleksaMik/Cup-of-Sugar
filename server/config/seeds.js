const db = require("./connection");
const { User, Rental, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Tools/Equipments" },
    { name: "Household Supplies" },
    { name: "For Party" },
    { name: "Books" },
    { name: "For Kids" },
  ]);

  console.log("categories seeded");

  await Rental.deleteMany();

  const rentals = await Rental.insertMany([
    {
      name: "Ladder",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "ladder.jpg",
      category: categories[0]._id,
      zipcode: "12345",
      quantity: 1,
    },
    {
      name: "Outdoor Party Chairs",
      description:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      image: "patio-chair.jpg",
      category: categories[2]._id,
      zipcode: "12345",
      quantity: 8,
    },
    {
      name: "Newborn Bassinet",
      category: categories[4]._id,
      description:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
      image: "infant-crib.jpg",
      zipcode: "12345",
      quantity: 1,
    },
    {
      name: "Lawn Mower",
      category: categories[0]._id,
      description:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      image: "lawn-mower.jpg",
      zipcode: "12345",
      quantity: 1,
    },
    {
      name: "Intro to JavaScript",
      category: categories[3]._id,
      description:
        "Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
      image: "javascript-book.jpg",
      zipcode: "12345",
      quantity: 1,
    },
    {
      name: "Outdoor Table",
      category: categories[2]._id,
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      image: "outdoor-table.jpg",
      zipcode: "12345",
      quantity: 2,
    },
    {
      name: "Pressure Washer",
      category: categories[0]._id,
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      image: "pressurewasher.jpg",
      zipcode: "12345",
      quantity: 1,
    },
    {
      name: "Vacuum Cleaner",
      category: categories[1]._id,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
      image: "vacuum-cleaner.jpg",
      zipcode: "12345",
      quantity: 1,
    },
    {
      name: "Dutch Oven",
      category: categories[1]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "dutch-oven.jpg",
      zipcode: "12345",
      quantity: 1,
    },
    {
      name: "Todler Play Pen",
      category: categories[4]._id,
      description:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      image: "play-pen.jpg",
      zipcode: "12345",
      quantity: 1,
    },
    {
      name: "Set of Tools",
      category: categories[0]._id,
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image: "tools.jpg",
      zipcode: "12345",
      quantity: 2,
    },
    {
      name: "Patio Umbrella",
      category: categories[2]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "umbrella.jpg",
      zipcode: "12345",
      quantity: 2,
    },
  ]);

  console.log("rentals seeded");

  await User.deleteMany();

  await User.create({
    username: "RobinHood",
    email: "hood@testmail.com",
    password: "password12345",
    rentals: [rentals[0]._id, rentals[4]._id, rentals[1]._id],
  });

  await User.create({
    username: "PeterParker",
    email: "parker@testmail.com",
    password: "password12345",
  });

  await User.create({
    username: "SkyWalker",
    email: "Skywalker@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
