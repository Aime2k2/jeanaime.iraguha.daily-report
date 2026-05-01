# GlobalBridge B2B Marketing Website (Alibaba-style Simulation)

This project contains a cleanly separated **frontend** and **backend** to simulate a B2B marketplace marketing platform similar to Alibaba workflows:

- Category-led product discovery
- Verified supplier showcase
- RFQ submission funnel
- Marketplace KPI section for trust and conversion

## Project Structure

```text
.
├── frontend/
│   ├── public/index.html
│   ├── src/main.js
│   └── src/styles/main.css
└── backend/
    ├── src/controllers/marketplaceController.js
    ├── src/data/mockData.js
    ├── src/middleware/notFound.js
    ├── src/routes/marketplaceRoutes.js
    └── src/server.js
```

## Run Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:4000`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`.

## API Endpoints

- `GET /api/health`
- `GET /api/categories`
- `GET /api/suppliers`
- `GET /api/metrics`
- `POST /api/rfq`
