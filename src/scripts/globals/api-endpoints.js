import CONFIG from './config';

const API_ENDPOINT = {
    LIST: `${CONFIG.BASE_URL}/list`,
    DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
    POST_REVIEW: `${CONFIG.BASE_URL}/review`,
    SEARCH: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
    IMAGE: (pictureId) => `${CONFIG.BASE_IMAGE_URL}${pictureId}`,
};

export default API_ENDPOINT;
