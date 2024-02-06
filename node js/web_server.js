const express = require("express");
const app = express();

const PORT = process.env.PORT || 3500;

app.use(express.json()); //middleware
app.use("/todos", require("./routes/Todos"));

// app.get("^/$|/index(.html)?", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/new_page.html", (req, res) => {
//   res.sendFile(path.join(__dirname, "new_page.html"), (err) => {
//     if (err) {
//       console.error(err);
//     }
//   });
// });
// app.get("/old_page(.html)?", (req, res) => {
//     res.status(301).redirect('new_page.html');
// });
// app.get('/*',(req,res)=>{
//     res.status(404).sendFile(path.join(__dirname, "index.html"));
// })
app.listen(PORT, () => console.log(`server running on ${PORT}`));
