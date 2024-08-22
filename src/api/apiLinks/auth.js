// src/api/apiLinks/authApi.js

import apiConnector from '../apiConnector';
import { AUTH_API } from '../apis';

export const signup = async (userData) => {
    return await apiConnector('POST', AUTH_API.SIGNUP, userData);
};

export const login = async (userData) => {
    return await apiConnector('POST', AUTH_API.LOGIN, userData);
};
