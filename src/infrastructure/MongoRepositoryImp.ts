import {LinkRepository} from '../domain/LinkRepository.ts';
import {Link} from "../domain/Link.ts";
import {Link as LinkModel} from "./LinkSchema.ts";
import {LinkNotFoundError} from "../domain/LinkNotFoundError.ts";

export class MongoRepositoryImp implements LinkRepository {

    async getLink(linkId: string): Promise<Link> {

        const query = await LinkModel.findOne({shortCode: linkId})
        if (!query) throw new LinkNotFoundError("Link not found")
        return {
            shortCode: query.shortCode,
            originalUrl: query.url,
            createdAt: query.createdAt
        }
    }

    async saveLink(shortCode: string, originalUrl: string): Promise<Link> {
        const link = new LinkModel({
            url: originalUrl,
            shortCode: shortCode,
            createdAt: new Date()
        })
        const query = await link.save()
        if (query) {
            return Promise.resolve({
                shortCode: query.shortCode,
                originalUrl: query.url,
                createdAt: query.createdAt,
            })
        }
        return Promise.reject()
    }
}