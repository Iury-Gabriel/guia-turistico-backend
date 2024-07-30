-- CreateTable
CREATE TABLE "Destino" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Atrativo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dicas" TEXT NOT NULL,
    "destinoId" INTEGER NOT NULL,
    CONSTRAINT "Atrativo_destinoId_fkey" FOREIGN KEY ("destinoId") REFERENCES "Destino" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
