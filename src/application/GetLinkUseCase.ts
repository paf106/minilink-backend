import {LinkRepository} from "../domain/LinkRepository.ts";

export class GetLinkUseCase {
    constructor(private linkRepository: LinkRepository) {
    }

    async execute(linkId: string) {
        return this.linkRepository.getLink(linkId);
    }
}