# Womigoo

Prototype skeleton for the Womigoo application, a platform inspired by Swiggy to empower women entrepreneurs selling local food products.

## Structure

- `backend/` – Node.js Express server with in-memory user and vendor accounts, kitchen listing and order APIs.
- `frontend/` – React app powered by Vite with pages for user and vendor registration/login and browsing kitchens with a pink, Apple-inspired theme.

## Getting Started

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Both sides include a simple `npm test` placeholder command.

### Sample API Usage

- `POST /users/register` – create a user: `{ name, email, password }`
- `POST /users/login` – authenticate user: `{ email, password }`
- `POST /vendors/register` – register a vendor: `{ name, email, password }`
- `POST /vendors/login` – authenticate vendor: `{ email, password }`
- `GET /kitchens` – list available kitchens
- `POST /orders` – place an order: `{ userId, kitchenId, items: [] }`
