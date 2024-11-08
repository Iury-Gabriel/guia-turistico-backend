const { PrismaClient } = require('@prisma/client');

class Database {
  constructor() {
    this.prisma = new PrismaClient();
  }

  getPrisma() {
    return this.prisma;
  }
}

module.exports = Database;
