const request = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        const errData = await response.json();
        throw errData;
    } catch (e) {
        console.log(e);
    }
};

const BASE_URL = 'https://pixabay.com/api';
const defaultParams = {
    key: process.env.REACT_APP_PIXABAY,
    q: '',
};
const getWallPapers = async (paramsObj) => {
    const params = new URLSearchParams({
        ...defaultParams,
        ...paramsObj,
    }).toString();
    const result = await request(`${BASE_URL}/?${params}`);
    return result;
};

export default getWallPapers;
