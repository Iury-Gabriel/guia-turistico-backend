class DestinoController {
    constructor(prisma) {
      this.prisma = prisma;
    }
  
    async getAll(req, res) {
      const destinos = await this.prisma.destino.findMany();
      res.json(destinos);
    }
  
    async getById(req, res) {
      const { id } = req.params;
      const destino = await this.prisma.destino.findUnique({
        where: { id: parseInt(id) },
        include: { atrativos: true },
      });
      res.json(destino);
    }
  }
  
  module.exports = DestinoController;
  