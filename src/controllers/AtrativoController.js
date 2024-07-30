class AtrativoController {
    constructor(prisma) {
      this.prisma = prisma;
    }
  
    async getByDestinoId(req, res) {
      const { destinoId } = req.params;
      const atrativos = await this.prisma.atrativo.findMany({
        where: { destinoId: parseInt(destinoId) },
      });
      res.json(atrativos);
    }
  }
  
  module.exports = AtrativoController;
  