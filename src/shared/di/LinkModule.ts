import {MongoRepositoryImp} from "../../infrastructure/MongoRepositoryImp.ts";
import {SaveLinkUseCase} from "../../application/SaveLinkUseCase.ts";
import {GetLinkUseCase} from "../../application/GetLinkUseCase.ts";
import {GenerateRandomKeyUseCase} from "../../application/GenerateRandomKeyUseCase.ts";

const linkRepository = new MongoRepositoryImp()

export const linkModule = {
    saveLink: new SaveLinkUseCase(linkRepository),
    getLink: new GetLinkUseCase(linkRepository),
    generateRandomKeyUseCase: new GenerateRandomKeyUseCase(),
}