import {Link} from "../domain/Link.ts";

export interface LinkRepository {

    getLink(linkId: string): Promise<Link | null>;

    saveLink(shortCode: string, originalUrl: string): Promise<void>;

    linkExists(shortCode: string): Promise<boolean>;
}