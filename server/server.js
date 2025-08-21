require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('mssql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Configuración del servidor de BD
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

// Conexión con la base de datos
sql.connect(dbConfig, (err) => {
    if (err) {
        console.log("❌ Error en la conexión:", err);
    } else {
        console.log("✅ Conexión exitosa con callback");
    }
});

// Rutas
app.get('/', (req, res) => {
    res.send('API de autenticación y autorización');
});

// Puerto
const Port = process.env.PORT || 5000;
app.listen(Port, () => {
    console.log(`Corriendo por el puerto ${Port}`);
});
