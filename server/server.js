import express from "express";
import { connectDB } from "./config/db.js"; // ajusta la ruta si tu archivo está en otra carpeta

const app = express();
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    // Conectar a MySQL
    await connectDB();

    // Rutas de prueba
    app.get("/", (req, res) => {
      res.send("Servidor y MySQL funcionando 🚀");
    });

    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ No se pudo iniciar el servidor:", error);
  }
};

startServer();

