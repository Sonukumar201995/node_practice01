const express = require("express");
const router = express.Router();

const user = require("./../models/user");


// .................Get api...............
router.get("/user", async (req, res) => {
    try {
        const data = await user.find();

        res.status(200).json(data);
    } catch (err) {
        console.log(err);

        res.status(500).json({
            error: "Internal server error"
        });
    }
});


// ================= GET METHOD paramer call  =================
router.get("/user/:role", async (req, res) => {
    try {
        const role = req.params.role;

        if (role === "admin" || role === "customer") {
            const data = await user.find({ role: role });

            console.log("Data fetched");

            res.status(200).json(data);
        } else {
            res.status(400).json({
                error: "Invalid role"
            });
        }
    } catch (err) {
        console.log(err);

        res.status(500).json({
            error: "Internal server error"
        });
    }
});


// ================= POST METHOD =================
router.post("/user", async (req, res) => {
    try {
        const data = req.body;

        const newUser = new user(data);

        const response = await newUser.save();

        console.log("Data saved");

        res.status(201).json(response);
    } catch (err) {
        console.log(err);

        res.status(500).json({
            error: "Internal server error"
        });
    }
});


// ================= PUT METHOD =================
router.put("/user/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const updateUser = req.body;

        const response = await user.findByIdAndUpdate(
            userId,
            updateUser,
            {
                new: true,
                runValidators: true
            }
        );

        if (!response) {
            return res.status(404).json({
                error: "User not found"
            });
        }

        console.log("Data updated");

        res.status(200).json(response);
    } catch (err) {
        console.log(err);

        res.status(500).json({
            error: "Internal server error"
        });
    }
});


// ================= DELETE METHOD =================
router.delete("/user/:id", async (req, res) => {
    try {
        const userId = req.params.id;

        const response = await user.findByIdAndDelete(userId);

        if (!response) {
            return res.status(404).json({
                error: "User not found"
            });
        }

        console.log("User deleted");

        res.status(200).json({
            message: "User deleted successfully",
            deletedUser: response
        });
    } catch (err) {
        console.log(err);

        res.status(500).json({
            error: "Internal server error"
        });
    }
});


// Export router
module.exports = router;