import axios from 'axios';
export const getJobsList = () => async (dispatch) => {
    try {
        const response = await axios({
            url: '/positions.json?page=1&search=code',
            headers: { 'content-type': 'application/json' },
            responseType: 'json',
        });
        dispatch({
            type: 'JOBS_LIST',
            payLoad: response.data,
        });
    } catch (err) {
        console.log(err);
    }
};
