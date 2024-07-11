import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a route to get data
app.get('/api/data', (req, res) => {
  const data = [
    { id: 1, name: 'Sidhi' },
    { id: 2, name: 'Anish' },
    { id: 3, name: 'Diwakar' },
  ];
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});