/*
  Warnings:

  - Changed the type of `numeroIdentificacion` on the `Estudiante` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Estudiante" DROP COLUMN "numeroIdentificacion",
ADD COLUMN     "numeroIdentificacion" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Estudiante_numeroIdentificacion_key" ON "Estudiante"("numeroIdentificacion");
