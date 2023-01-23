const prisma = require('./prismaClient.js');
const { faker } = require('@faker-js/faker');

const tags = [
  'Nike',
  'Adidas',
  'Puma',
  'Converse',
  'Reebok',
  'New-Balance',
  'Vans',
  'Jordan',
  'Yeezy',
  'Asics',
  'Basketball',
  'Sneakers',
  'HipHop',
  'Misc',
  'Funny',
  'Event',
  'Release',
  'Rumor'
];

const users = [];
const articles = [];

function pickTags(num = 2) {
  let assigned = [];
  let x = 0;

  while (x < num) {
    let tag = tags[Math.floor(Math.random() * tags.length)];
    if (assigned.includes(tag)) continue;
    assigned.push(tag);
    x++;
  }
  return assigned;
}

function createData(num) {
  let x = 0;

  while (x < num) {
    const user = {
      email: faker.internet.email(),
      name: faker.name.fullName(),
      articles: {
        create: {
          title: faker.lorem.words(5),
          content: faker.lorem.paragraphs(5, '\n'),
          published: true
        }
      }
    };
    users.push(user);
    x++;
  }
}

async function seedDb() {
  for (let user of users) {
    await prisma.user.create({
      data: user,
      include: {
        articles: true
      }
    });
  }
}

async function main() {
  createData(0);
  await seedDb();

  // const genTags = tags.map((tag) => {
  //   return {
  //     name: tag
  //   };
  // });
  // await prisma.tags.createMany({
  //   data: genTags,
  //   skipDuplicates: true
  // });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
