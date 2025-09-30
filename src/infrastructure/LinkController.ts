import {Request, Response} from 'express';
import {linkModule} from "../shared/di/LinkModule.ts";
import {LinkNotFoundError} from "../domain/LinkNotFoundError.ts";

export class LinkController {

    async saveLink(req: Request, res: Response) {
        const {url} = req.body
        const shortCode = linkModule.generateRandomKeyUseCase.execute()

        const link = await linkModule.saveLink.execute(shortCode, url)

        return res.json(link)
    }

    async getLink(req: Request, res: Response) {

        const {shortCode} = req.body

        try {
            if (shortCode) {
                const link = await linkModule.getLink.execute(shortCode)
                return res.json(link)
            }
        } catch (e) {
            if (e instanceof LinkNotFoundError) {
                return res.status(404).json({message: e.message})
            } else if (e instanceof Error) {
                return res.status(500).json({message: e.message})
            }
        }

    }
}