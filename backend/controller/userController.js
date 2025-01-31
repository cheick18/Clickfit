import { connectDB } from "../config/db.js";
import path from "path";
import bcrypt from 'bcrypt'
export const addUser = async (req, res) => {
    const saltRounds = 10;
    const { email, password, type, active } = req.body;
    if (!email || !password || !type) {
        return res.status(400).json({ message: 'Please provide all the fiels' });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const query = 'INSERT INTO users (email, password, type, active) VALUES (?, ?, ?, ?)';
    connectDB.execute(query, [email, hashedPassword, type, active || 1], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion : ', err);
            return res.status(500).json({ message: 'Erreur serveur' });
        }
        console.log('ajout du user')

        res.status(201).json({ success:true,data: result });

    });


}

export const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  res.status(201).json({ success:true,data: result });
};
