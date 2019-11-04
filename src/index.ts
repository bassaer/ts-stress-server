import * as express from "express";
import { exec } from "child_process";

const app = express();
const PORT = 80;

function _exec(cmd: string) {
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.error(`[ERROR] ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
    });
}

app.get("/", (req, res) => {
    console.log(`query: ${req.query}`)
    if (req.query.cpu !== undefined) {
        const cmd = `stress-ng -q -c 1 -l ${req.query.cpu} &`;
        _exec(cmd)
        console.log(`exec : ${cmd}`)

    }
    if (req.query.mem !== undefined) {
        const cmd = `stress-ng -q -m 1 --vm-hang 0 --vm-bytes ${req.query.mem} &`;
        _exec(cmd)
        console.log(`exec : ${cmd}`)
    }
    res.send("OK!\n");
});

app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`)
});
