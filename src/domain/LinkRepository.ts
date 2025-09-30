import {Link} from "./Link.ts";

export interface LinkRepository {

    getLink(linkId: string): Promise<Link>;

    saveLink(shortCode: string, originalUrl: string): Promise<Link>;
}