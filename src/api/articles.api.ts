import qs from 'qs';

import { endpoints } from '../constants';
import { IArticle, IPaginationOptions } from '../types';

export const getList = async (filterBy: string, searchTerm: string, { page, limit }: IPaginationOptions): Promise<IArticle[]> => {
    const query = qs.stringify({
        [filterBy]: searchTerm.split(' '),
        _limit: limit,
        _start: page * limit
    });

    const response = await fetch(`${endpoints.articles}?${query}`);
    return response.json();
}

export const getTotalCount = async (filterBy: string, searchTerm: string): Promise<number> => {
    const query = qs.stringify({ [filterBy]: searchTerm.split(' ') });

    const response = await fetch(`${endpoints.articles}/count?${query}`);
    return response.json();
}

export const getItem = async (id: string): Promise<IArticle> => {
    const response = await fetch(`${endpoints.articles}/${id}`)
    return response.json();
}

export default {
    getList,
    getTotalCount,
    getItem,
}