import mysql from "mysql2/promise";

export const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",     // tu usuario
      password: "", // tu contraseña
      database: "mydb"
    });
    console.log("✅ Conectado a MySQL");
    return connection;
  } catch (error) {
    console.error("❌ Error al conectar con MySQL:", error);
    process.exit(1);
  }
};
