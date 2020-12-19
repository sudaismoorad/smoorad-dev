import { BlockMapType } from "react-notion";

export const getNotionPageBlocks = async (pageId: string): Promise<BlockMapType> => 
    fetch(
        `https://notion-api.splitbee.io/v1/page/${pageId}`
    ).then((res) => res.json()
    );

export const getNotionTable = async <T>(blogId: string): Promise<T[]> =>
    fetch(`https://notion-api.splitbee.io/v1/table/${blogId}`).then(res =>
        res.json()
    );

export const getDate = (date: number | Date | string) => {
    date = new Date(date);
    return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "2-digit",
    }).format(date); 
}