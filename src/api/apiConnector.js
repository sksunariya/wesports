// src/api/apiConnector.js

import axios from 'axios';

const apiConnector = async (method, url, data = null, headers = {}) => {
    try {
        const response = await axios({
            method,
            url,
            data,
            headers,
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
};

export default apiConnector;
