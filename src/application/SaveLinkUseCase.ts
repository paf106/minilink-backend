import {LinkRepository} from "../domain/LinkRepository.ts";

export class SaveLinkUseCase {
    constructor(private linkRepository: LinkRepository) {
    }

    async execute(shortCode: string, originalUrl: string) {
        return this.linkRepository.saveLink(shortCode, originalUrl);
    }
}