const prisma = require("../prisma");

// Create 20 customers

const seedCustomer = async (numCustomers = 20) => {
  // Need to use a for loop to create the customers

  for (let i = 0; i < numCustomers; i++) {
    // Create an array of customers
    const customers = [];
    customers.push({ name: `Customer ${i}` });
  }

  await prisma.customer.create({
    data: {
      name: `Customer ${i}`,
      create: customers,
    },
  });
};

const seedRestaurant = async (numRestaurants = 20) => {
  // Need to use a for loop to create the restaurants

  for (let i = 0; i < numRestaurants; i++) {
    // Create an array of restaurants
    const restaurants = [];
    restaurants.push({ name: `Restaurant ${i}` });
  }

  await prisma.restaurant.create({
    data: {
      name: `Restaurant ${i}`,
      create: restaurants,
    },
  });
};

seedCustomer()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

seedRestaurant()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
