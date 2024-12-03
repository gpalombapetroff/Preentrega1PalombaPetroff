import multer from "multer";
import { __dirname } from "../path.js";


const storageProducts = multer.diskStorage({
    destination: (req,file, cb) => {
        cb(null, `${__dirname}/public/img/products`) //Guardame las img en esta carpeta
    },
    filename: (req,file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`) //Concatename la fecha actual con el nombre origianl del archivo
    }
    
})


export const uploadProds = multer({storage: storageProducts})