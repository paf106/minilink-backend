import express, {Application, Request, Response} from "express";
import mongoose from "mongoose";
import {LinkRepositoryImpl} from "./infrastructure/LinkRepositoryImpl.ts";
import {generateRandomKeyUseCase} from "./application/generateRandomKeyUseCase.ts";

const app: Application = express()
const PORT = process.env.PORT || 3000

const linkRepository = new LinkRepositoryImpl()

app.use(express.json())

app.post("/shorten", async (req: Request, res: Response) => {

    const {url} = req.body
    const shortCode = generateRandomKeyUseCase()

    const a = await linkRepository.saveLink(shortCode,url)

    return res.json({a})
})

app.post("/extend", async (req: Request, res: Response) => {

    const {shortCode} = req.body

    if (shortCode) {
        const originalUrl = await linkRepository.getLink(shortCode)
        return res.json(originalUrl)
    }
    return res.status(404).json({message: "Link not found"})

})

app.disable("x-powered-by")

await mongoose.connect('mongodb://127.0.0.1:27017/minilink');

app.listen(PORT, (): void => {
    console.log(`Server is running on port ${PORT}`);
})