const prisma = require('./prismaClient.js');
const faker = require('faker');

const users = [];

function createUsers() {
  const num = 100;
  let x = 0;

  while (x < 100) {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email()
    };
    users.push(user);
    x++;
  }
}

async function seedDb() {
  await prisma.user.createMany({ data: users });
}

async function main() {
  createUsers();
  await seedDb();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
