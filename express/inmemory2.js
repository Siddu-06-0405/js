// dumb way of doing input validation and authentication


const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = parseInt(req.query.kidneyId, 10); // Convert query parameter to integer

    if (username !== "sid" || password !== "pass") {
        res.status(400).json({ "msg": "Your inputs are making trouble" });
        return;
    }

    if (kidneyId !== 1 && kidneyId !== 2) {
        res.status(400).json({ "msg": "Your inputs are making trouble" });
        return;
    }

    // do something with kidney here
    res.json({
        msg: "Your kidney is fine!"
    });
});

app.listen(3001, () => {
    console.log("Server is listening at port 3001");
});
