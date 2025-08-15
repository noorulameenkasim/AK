const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory data stores
const users = [];
const vendors = [];
const kitchens = [
  {
    id: 1,
    name: 'Sample Kitchen',
    menu: [
      { id: 1, name: 'Rice Bowl', price: 120 },
      { id: 2, name: 'Veg Curry', price: 80 }
    ]
  }
];
const orders = [];

app.get('/', (req, res) => {
  res.send('Womigoo backend running');
});

// Customer registration
app.post('/users/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'User exists' });
  }
  const id = users.length + 1;
  users.push({ id, name, email, password });
  res.json({ id, name, email });
});

// Customer login
app.post('/users/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  res.json({ id: user.id, name: user.name, email: user.email });
});

// Vendor registration
app.post('/vendors/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  if (vendors.find(v => v.email === email)) {
    return res.status(400).json({ error: 'Vendor exists' });
  }
  const id = vendors.length + 1;
  vendors.push({ id, name, email, password });
  res.json({ id, name, email });
});

// Vendor login
app.post('/vendors/login', (req, res) => {
  const { email, password } = req.body;
  const vendor = vendors.find(v => v.email === email && v.password === password);
  if (!vendor) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  res.json({ id: vendor.id, name: vendor.name, email: vendor.email });
});

app.get('/kitchens', (req, res) => {
  res.json(kitchens);
});

app.post('/orders', (req, res) => {
  const { userId, kitchenId, items } = req.body;
  if (!userId || !kitchenId) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const id = orders.length + 1;
  orders.push({ id, userId, kitchenId, items: items || [], status: 'placed' });
  res.json({ id });
});

app.get('/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === Number(req.params.id));
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.json(order);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

module.exports = app;
