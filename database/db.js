const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = 'mongodb://localhost:27017/CreationApi_Tp5';
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
