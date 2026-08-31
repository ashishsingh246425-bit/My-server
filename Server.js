const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Mera server successfully chal raha hai!");
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello! API working hai."
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
