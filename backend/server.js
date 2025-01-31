import express from 'express'
import multer from 'multer';
import path from 'path';
import userRoutes from './routes/user.routes.js'; 
import cors from 'cors'; 
const app= express();
/*
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  */
const port=process.env.PORT || 4000
app.use(express.json());
app.use(cors())
app.use(userRoutes);

app.listen(port,()=>{
    console.log(`Server is started at http://localhost:${port}"`)
})