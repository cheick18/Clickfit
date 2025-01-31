import express from 'express'
import multer from 'multer';
import path from 'path';
import userRoutes from './routes/user.routes.js';
import cors from 'cors';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();

app.use(express.static(path.join(__dirname, '../'))); 
const port = process.env.PORT || 4000
app.use(express.json());
app.use(cors())
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server is started at http://localhost:${port}"`)
})