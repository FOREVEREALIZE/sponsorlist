import type {NextApiRequest, NextApiResponse} from "next";
import algoliasearch from "algoliasearch";

export type SearchResult = {
    id: string;
    brandname: string;
    companies: string[];
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<SearchResult[]>,
) {
    const client = algoliasearch(process.env.ALGOLIA_APP_ID as string, process.env.ALGOLIA_API_KEY as string);
    const index = client.initIndex('brands');
    const query = req.query.q as string;

    const results = await index.search(query)

    res.status(200).json(results.hits.map((v) => {
        // Algolia's package's types don't include custom fields
        return {
            ...v,

            // We don't need to send all of this to the client, so we remove it to make the response smaller
            objectID: undefined,
            _highlightResult: undefined,
            _snippetResult: undefined,
            _rankingInfo: undefined,
            _distinctSeqID: undefined,
        } as unknown as SearchResult;
    }));
}
