import {LinkRepository} from '../application/LinkRepository.ts';
import {Link} from "../domain/Link.ts";
import {Link as LinkModel} from "./LinkSchema.ts";

export class LinkRepositoryImpl implements LinkRepository {

    async getLink(linkId: string): Promise<Link | null> {

        try{
            const query = await LinkModel.findOne({shortCode: linkId})
            if(query) {
                return Promise.resolve({
                    shortCode: query.shortCode,
                    originalUrl: query.url,
                    createdAt: query.createdAt,
                })
            }else{
                return Promise.resolve(null)
            }
        }catch (e) {
            console.log("error en getLink",e)
            return Promise.resolve(null)
        }
    }

    async linkExists(shortCode: string): Promise<boolean> {

        try {
            const doc = await LinkModel.findOne({shortCode: shortCode})
            console.log({doc})
            if (doc) {
                return Promise.resolve(true)

            } else{
                return Promise.resolve(false)
            }

        }catch (e){
            console.log("error en linkExisits",e)
            return Promise.resolve(false)

        }

    }

    async saveLink(shortCode: string, originalUrl: string): Promise<void> {
        let link = new LinkModel({
            url: originalUrl,
            shortCode: shortCode,
            createdAt: new Date()
        })
        const query = await link.save()
        if (query){
            return Promise.resolve()
        }
        return Promise.reject()
    }



}