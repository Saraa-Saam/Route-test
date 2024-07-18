const express = require("express");
const app = express();
const PORT = 4000;

const data = {
    customers: [
        { id: 1, name: "Sara Samir" },
        { id: 2, name: "Bsmalah Samir" },
        { id: 3, name: "Karma Mohamed" },
        { id: 4, name: "Aber Sabah" },
        { id: 5, name: "Mohamed Ragab" },
    ],
    transactions: [
        // Day 1 (Today)
        { id: 1, customer_id: 1, date: "2024-07-18", amount: 1400 },
        { id: 2, customer_id: 2, date: "2024-07-18", amount: 2000 },
        { id: 3, customer_id: 3, date: "2024-07-18", amount: 550 },
        { id: 4, customer_id: 4, date: "2024-07-18", amount: 500 },
        { id: 5, customer_id: 5, date: "2024-07-18", amount: 1300 },
        { id: 6, customer_id: 1, date: "2024-07-18", amount: 400 },
        { id: 7, customer_id: 2, date: "2024-07-18", amount: 3000 },
        { id: 8, customer_id: 3, date: "2024-07-18", amount: 200 },
        { id: 9, customer_id: 4, date: "2024-07-18", amount: 200 },
        { id: 10, customer_id: 5, date: "2024-07-18", amount: 100 },
        { id: 11, customer_id: 1, date: "2024-07-18", amount: 260 },
        { id: 12, customer_id: 2, date: "2024-07-18", amount: 340 },
        { id: 13, customer_id: 3, date: "2024-07-18", amount: 1290 },
        { id: 14, customer_id: 4, date: "2024-07-18", amount: 290 },
        { id: 15, customer_id: 5, date: "2024-07-18", amount: 450 },
        // Day 2
        { id: 16, customer_id: 1, date: "2024-07-19", amount: 875 },
        { id: 17, customer_id: 2, date: "2024-07-19", amount: 1300 },
        { id: 18, customer_id: 3, date: "2024-07-19", amount: 900 },
        { id: 19, customer_id: 4, date: "2024-07-19", amount: 1340 },
        { id: 20, customer_id: 5, date: "2024-07-19", amount: 600 },
        { id: 21, customer_id: 1, date: "2024-07-19", amount: 2388 },
        { id: 22, customer_id: 2, date: "2024-07-19", amount: 1200 },
        { id: 23, customer_id: 3, date: "2024-07-19", amount: 450 },
        { id: 24, customer_id: 4, date: "2024-07-19", amount: 250 },
        { id: 25, customer_id: 5, date: "2024-07-19", amount: 330 },
        { id: 26, customer_id: 1, date: "2024-07-19", amount: 2388 },
        { id: 27, customer_id: 2, date: "2024-07-19", amount: 1200 },
        { id: 28, customer_id: 3, date: "2024-07-19", amount: 450 },
        { id: 29, customer_id: 4, date: "2024-07-19", amount: 250 },
        { id: 30, customer_id: 5, date: "2024-07-19", amount: 330 },
        // Day 3
        { id: 31, customer_id: 1, date: "2024-07-20", amount: 1200 },
        { id: 32, customer_id: 2, date: "2024-07-20", amount: 1100 },
        { id: 33, customer_id: 3, date: "2024-07-20", amount: 456 },
        { id: 34, customer_id: 4, date: "2024-07-20", amount: 1050 },
        { id: 35, customer_id: 5, date: "2024-07-20", amount: 754 },
        { id: 36, customer_id: 1, date: "2024-07-20", amount: 345 },
        { id: 37, customer_id: 2, date: "2024-07-20", amount: 1100 },
        { id: 38, customer_id: 3, date: "2024-07-20", amount: 444 },
        { id: 39, customer_id: 4, date: "2024-07-20", amount: 345 },
        { id: 40, customer_id: 5, date: "2024-07-20", amount: 4678 },
        { id: 41, customer_id: 1, date: "2024-07-20", amount: 1200 },
        { id: 42, customer_id: 2, date: "2024-07-20", amount: 456 },
        { id: 43, customer_id: 3, date: "2024-07-20", amount: 1245 },
        { id: 44, customer_id: 4, date: "2024-07-20", amount: 2400 },
        { id: 45, customer_id: 5, date: "2024-07-20", amount: 1250 },
        // Day 4
        { id: 46, customer_id: 1, date: "2024-07-21", amount: 950 },
        { id: 47, customer_id: 2, date: "2024-07-21", amount: 850 },
        { id: 48, customer_id: 3, date: "2024-07-21", amount: 750 },
        { id: 49, customer_id: 4, date: "2024-07-21", amount: 650 },
        { id: 50, customer_id: 5, date: "2024-07-21", amount: 359 },
        { id: 51, customer_id: 1, date: "2024-07-21", amount: 950 },
        { id: 52, customer_id: 2, date: "2024-07-21", amount: 2367 },
        { id: 53, customer_id: 3, date: "2024-07-21", amount: 1500 },
        { id: 54, customer_id: 4, date: "2024-07-21", amount: 1300 },
        { id: 55, customer_id: 5, date: "2024-07-21", amount: 390 },
        { id: 56, customer_id: 1, date: "2024-07-21", amount: 246 },
        { id: 57, customer_id: 2, date: "2024-07-21", amount: 321 },
        { id: 58, customer_id: 3, date: "2024-07-21", amount: 3678 },
        { id: 58, customer_id: 4, date: "2024-07-21", amount: 3000 },
        { id: 60, customer_id: 5, date: "2024-07-21", amount: 467 },
    ],
};

app.use(express.static("public"));

app.get("/data", (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
