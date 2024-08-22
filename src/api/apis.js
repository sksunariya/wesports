// src/api/apis.js

const BASE_URL = 'http://localhost:5000/api';

export const AUTH_API = {
    SIGNUP: `${BASE_URL}/auth/signup`,
    LOGIN: `${BASE_URL}/auth/login`,
};

export const COURT_API = {
    GET_ALL_COURTS: `${BASE_URL}/courts`,
    CREATE_COURT: `${BASE_URL}/courts`,
};

export const MATCH_API = {
    GET_ALL_MATCHES: `${BASE_URL}/matches`,
    CREATE_MATCH: `${BASE_URL}/matches`,
};
