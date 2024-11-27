-- CreateTable
CREATE TABLE "Estudiante" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "numeroIdentificacion" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "idCarrera" INTEGER,

    CONSTRAINT "Estudiante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profesor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "numeroIdentificacion" TEXT NOT NULL,

    CONSTRAINT "Profesor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carrera" (
    "id" SERIAL NOT NULL,
    "nombreCarrera" TEXT NOT NULL,

    CONSTRAINT "Carrera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Materia" (
    "id" SERIAL NOT NULL,
    "nombreMateria" TEXT NOT NULL,
    "anio" INTEGER NOT NULL,
    "idCarrera" INTEGER NOT NULL,

    CONSTRAINT "Materia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nota" (
    "id" SERIAL NOT NULL,
    "idEstudiante" INTEGER NOT NULL,
    "idMateria" INTEGER NOT NULL,
    "semestre" TEXT NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Nota_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Estudiante_numeroIdentificacion_key" ON "Estudiante"("numeroIdentificacion");

-- CreateIndex
CREATE UNIQUE INDEX "Profesor_numeroIdentificacion_key" ON "Profesor"("numeroIdentificacion");

-- CreateIndex
CREATE UNIQUE INDEX "Carrera_nombreCarrera_key" ON "Carrera"("nombreCarrera");

-- AddForeignKey
ALTER TABLE "Estudiante" ADD CONSTRAINT "Estudiante_idCarrera_fkey" FOREIGN KEY ("idCarrera") REFERENCES "Carrera"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materia" ADD CONSTRAINT "Materia_idCarrera_fkey" FOREIGN KEY ("idCarrera") REFERENCES "Carrera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_idEstudiante_fkey" FOREIGN KEY ("idEstudiante") REFERENCES "Estudiante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_idMateria_fkey" FOREIGN KEY ("idMateria") REFERENCES "Materia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
