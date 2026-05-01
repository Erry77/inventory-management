const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log("Mongo URI:", process.env.MONGO_URI); //  ADD THIS

        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB Connected');
    } catch (err) {
        console.error("DB Error:", err.message);
    }
};

module.exports = connectDB;