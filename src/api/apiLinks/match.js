// src/api/apiLinks/matchApi.js

import apiConnector from '../apiConnector';
import { MATCH_API } from '../apis';

export const getAllMatches = async (token) => {
    return await apiConnector('GET', MATCH_API.GET_ALL_MATCHES);
};

export const createMatch = async (matchData, token) => {
    return await apiConnector('POST', MATCH_API.CREATE_MATCH, matchData, {
        Authorization: `Bearer ${token}`,
    });
};
