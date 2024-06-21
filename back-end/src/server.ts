import express, { Request, Response } from "express";
import { createPool, Pool, PoolConnection } from "mysql2";

const app = express();
const PORT = 4000;

// Create a MySQL connection pool
const pool: Pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Serve static files (images)
app.use("/images", express.static("public/images"));

// Test the connection
pool.getConnection((err: Error | null, connection: PoolConnection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
    connection.release();
  }
});

// Route to get menu items for a specific language
app.get("/menu/:languageCode", (req: Request, res: Response) => {
  const { languageCode } = req.params;

  const query = `
    SELECT mi.key, mit.translation 
    FROM menu_items mi
    JOIN menu_item_translations mit ON mi.id = mit.menu_item_id
    JOIN languages l ON mit.language_id = l.id
    WHERE l.code = ?
  `;

  pool.query(query, [languageCode], (error, results: any[]) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (results.length === 0) {
      return res.status(404).json({
        message: "No translations found for the specified language code.",
      });
    }
    res.status(200).json(results);
  });
});

app.listen(PORT, () => console.log(`Server started on: ${PORT}`));

// Home route for testing
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to the simple Express MySQL application!");
});
