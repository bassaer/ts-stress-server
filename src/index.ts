import * as express from "express";

const app = express();
const PORT = 80;

app.get("/", (req, res) => {
    res.send("OK\n");
});

app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`)
});