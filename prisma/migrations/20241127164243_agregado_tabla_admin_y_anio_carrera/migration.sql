/*
  Warnings:

  - Added the required column `duracion` to the `Carrera` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Carrera" ADD COLUMN     "duracion" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Administrador" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Administrador_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Administrador_email_key" ON "Administrador"("email");
