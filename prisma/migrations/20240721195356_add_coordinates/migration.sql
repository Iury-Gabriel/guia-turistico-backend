/*
  Warnings:

  - Added the required column `latitude` to the `Destino` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Destino` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Destino" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL
);
INSERT INTO "new_Destino" ("descricao", "id", "imagem", "localizacao", "nome") SELECT "descricao", "id", "imagem", "localizacao", "nome" FROM "Destino";
DROP TABLE "Destino";
ALTER TABLE "new_Destino" RENAME TO "Destino";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
