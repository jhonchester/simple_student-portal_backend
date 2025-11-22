const app = require("./app");

// Render provides PORT, local default 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Student Portal running on port ${PORT}`);
});