const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Lavkush' },
    { id: 2, name: 'Rahul' }
  ]);
});

app.post('/users', (req, res) => {
  res.json({
    message: 'User created successfully',
    user: req.body
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
