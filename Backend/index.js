import express from 'express';
import os from 'os';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/hostname', (req, res) => {
  console.log(`Received request on ${os.hostname()}:${PORT}`);

  res.json({
    hostname: os.hostname(),
    port: PORT
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});