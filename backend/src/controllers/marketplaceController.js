import { categories, suppliers, metrics } from "../data/mockData.js";

export const getCategories = (_req, res) => res.json({ data: categories });
export const getSuppliers = (_req, res) => res.json({ data: suppliers });
export const getMetrics = (_req, res) => res.json({ data: metrics });

export const submitRfq = (req, res) => {
  const { company, email, product, details } = req.body;

  if (!company || !email || !product || !details) {
    return res.status(400).json({ message: "All RFQ fields are required." });
  }

  return res.status(201).json({
    message: `Thanks ${company}, your RFQ for ${product} has been received.`,
  });
};
