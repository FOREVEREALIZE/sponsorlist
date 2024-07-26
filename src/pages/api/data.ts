import type {NextApiRequest, NextApiResponse} from "next";
import {Brand, PrismaClient} from "@prisma/client";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Brand[]>,
) {
    const prisma = new PrismaClient();

    const q = req.query.q as string;
    const ids = q.split(",")

    const results = await prisma.brand.findMany({
        where: {
            id: {
                in: ids
            }
        }
    });

    res.json(results);
}
