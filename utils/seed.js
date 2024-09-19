const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");
const connection = require("../config/connection");

const users = [
    {
        username: "myUsername",
        email: "myEmail@gmail.com",
        thoughts: []
    },
];

connection.once("open", async () => {
    await User.deleteMany({});

    await User.collection.insertMany(users);

    console.table(users);
    console.log("seeded");
    process.exit(0);
});