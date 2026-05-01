import { Router } from "express";
import { getCategories, getMetrics, getSuppliers, submitRfq } from "../controllers/marketplaceController.js";

const router = Router();

router.get("/categories", getCategories);
router.get("/suppliers", getSuppliers);
router.get("/metrics", getMetrics);
router.post("/rfq", submitRfq);

export default router;
