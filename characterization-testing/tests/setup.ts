import { prisma } from '../src/database';
import { resetDatabase } from './fixtures';

beforeAll(async () => {
  // Reset database before running tests
  await resetDatabase();
});

afterAll(async () => {
  // Disconnect Prisma so Jest can exit cleanly
  await prisma.$disconnect();
});
