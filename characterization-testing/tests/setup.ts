import { prisma } from '../src/database';

afterAll(async () => {
  // Disconnect Prisma so Jest can exit cleanly
  await prisma.$disconnect();
});
