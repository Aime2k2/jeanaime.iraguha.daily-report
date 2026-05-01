import express from "express";
import cors from "cors";
import marketplaceRoutes from "./routes/marketplaceRoutes.js";
import { notFound } from "./middleware/notFound.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api", marketplaceRoutes);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
