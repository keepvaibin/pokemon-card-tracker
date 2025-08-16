// prisma/users/seed.ts  (CommonJS-friendly)
const { PrismaClient } = require("../../generated/user");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding default Collection lists...");

  const users = await prisma.user.findMany();

  for (const user of users) {
    const existingDefault = await prisma.list.findFirst({
      where: { userId: user.id, isDefault: true,
      },
    });

    if (!existingDefault) {
      await prisma.list.create({
        data: {
          userId: user.id,
          name: "Collection",
          isDefault: true,
          cards: [],
        },
      });
      console.log(`✅ Added default list for ${user.email ?? user.id}`);
    }
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
