import express from "express";
import { connectDB } from "./config/db.js"; 

const app = express();
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    
    await connectDB();

    // Rutas de prueba
    app.get("/", (req, res) => {
      res.send("Servidor FuncionNDO");
    });

    app.get("/Prodcutos", (req,res)=>{
        r/)
    })

    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(` Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ No se pudo iniciar el servidor:", error);
  }
};

startServer();

