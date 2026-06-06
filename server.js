const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

let users = [];

// GET API

app.get("/users", (req, res) => {

    res.json(users);
});

// POST API

app.post("/addUser", (req, res) => {

    const user = req.body;

    users.push(user);

    res.json({
        message: "User added successfully"
    });
});

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);
});