// src/api/apiLinks/courtApi.js

import apiConnector from '../apiConnector';
import { COURT_API } from '../apis';

export const getAllCourts = async () => {
    return await apiConnector('GET', COURT_API.GET_ALL_COURTS);
};

export const createCourt = async (courtData, token) => {
    return await apiConnector('POST', COURT_API.CREATE_COURT, courtData, {
        Authorization: `Bearer ${token}`,
    });
};
