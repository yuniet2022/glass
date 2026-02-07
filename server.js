
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from 'pg';
const { Pool } = pkg;
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de PostgreSQL basada en tu imagen
const pool = new Pool({
  user: process.env.DB_USER || 'appuser',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'appdb',
  password: process.env.DB_PASSWORD || 'ClaveFuerte123!',
  port: process.env.DB_PORT || 5432,
});

// Inicialización de la base de datos (Crear tablas si no existen)
const initDB = async () => {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS services (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        image_url TEXT,
        category TEXT
      );
      CREATE TABLE IF NOT EXISTS gallery (
        id TEXT PRIMARY KEY,
        type TEXT,
        url TEXT NOT NULL,
        thumbnail_url TEXT,
        title TEXT,
        category TEXT
      );
      CREATE TABLE IF NOT EXISTS appointments (
        id TEXT PRIMARY KEY,
        client_name TEXT NOT NULL,
        email TEXT,
        phone TEXT,
        date DATE NOT NULL,
        time TEXT NOT NULL,
        project_type TEXT,
        notes TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS blocked_slots (
        id SERIAL PRIMARY KEY,
        date DATE NOT NULL,
        time TEXT NOT NULL,
        UNIQUE(date, time)
      );
      CREATE TABLE IF NOT EXISTS blog_posts (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        image_url TEXT,
        category TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("✅ Database tables initialized");
  } catch (err) {
    console.error("❌ DB Init Error:", err);
  } finally {
    client.release();
  }
};

initDB();

// --- API ENDPOINTS ---

// Blog Endpoints
app.get("/api/blog", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM blog_posts ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/blog", async (req, res) => {
  try {
    const { id, title, content, image_url, category } = req.body;
    await pool.query(
      "INSERT INTO blog_posts (id, title, content, image_url, category) VALUES ($1, $2, $3, $4, $5)",
      [id, title, content, image_url, category]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/blog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, image_url, category } = req.body;
    await pool.query(
      "UPDATE blog_posts SET title = $1, content = $2, image_url = $3, category = $4 WHERE id = $5",
      [title, content, image_url, category, id]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/blog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM blog_posts WHERE id = $1", [id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// AI Chat
app.post("/api/chat", async (req, res) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    if (!apiKey) return res.status(500).json({ error: "Missing API Key" });
    const { prompt, history } = req.body;
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...(Array.isArray(history) ? history : []),
        { role: 'user', parts: [{ text: String(prompt || "") }] }
      ],
      config: { temperature: 0.7 }
    });
    res.json({ text: response.text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Services
app.get("/api/services", async (req, res) => {
  const result = await pool.query("SELECT * FROM services");
  res.json(result.rows);
});

// Gallery
app.get("/api/gallery", async (req, res) => {
  const result = await pool.query("SELECT * FROM gallery");
  res.json(result.rows);
});

// Appointments
app.get("/api/appointments", async (req, res) => {
  const result = await pool.query("SELECT * FROM appointments ORDER BY date, time");
  res.json(result.rows);
});

app.post("/api/appointments", async (req, res) => {
  const { id, clientName, email, phone, date, time, projectType, notes } = req.body;
  await pool.query(
    "INSERT INTO appointments (id, client_name, email, phone, date, time, project_type, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [id, clientName, email, phone, date, time, projectType, notes]
  );
  res.json({ success: true });
});

// Blocked Slots
app.get("/api/blocked-slots", async (req, res) => {
  const result = await pool.query("SELECT TO_CHAR(date, 'YYYY-MM-DD') as date, time FROM blocked_slots");
  res.json(result.rows);
});

app.post("/api/blocked-slots/toggle", async (req, res) => {
  const { date, time } = req.body;
  const check = await pool.query("SELECT * FROM blocked_slots WHERE date = $1 AND time = $2", [date, time]);
  if (check.rows.length > 0) {
    await pool.query("DELETE FROM blocked_slots WHERE date = $1 AND time = $2", [date, time]);
  } else {
    await pool.query("INSERT INTO blocked_slots (date, time) VALUES ($1, $2)", [date, time]);
  }
  res.json({ success: true });
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
