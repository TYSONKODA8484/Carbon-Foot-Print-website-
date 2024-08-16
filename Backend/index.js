import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config(); // Load .env file

const PORT = process.env.PORT || 4000; 
const URI = process.env.MongoDBURI;

// connect to the mongoDB
try{
  mongoose.connect(URI,{
      useNewURLParser: true,
      useUnifiedTopology: true
  });
  console.log("Connected to mongoDB");
} catch(error){
  console.log("Error: ", error)
}



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
