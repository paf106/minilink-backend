import express, {Application} from "express";
import mongoose from "mongoose";
import {LinkController} from "./infrastructure/LinkController.ts";


const app: Application = express()
const PORT = process.env.PORT || 3000

const linkController = new LinkController()

app.use(express.json())

app.post("/shorten", linkController.saveLink)

app.post("/extend", linkController.getLink)

app.disable("x-powered-by")

await mongoose.connect('mongodb://127.0.0.1:27017/minilink');

app.listen(PORT, (): void => {
    console.log(`Server is running on port ${PORT}`);
})