import axios from 'axios';

export const getStudentGeneral = (token, url) => {
const config = {
    headers: { Authorization: `basic ${token}` }
};
    return axios.get(
        `${process.env.REACT_APP_API}/${url}`,
        config
        );
};

export const getUser = (token, url) => {
    const config = {
        headers: { Authorization: `basic ${token}` }
    };
        return axios.get(
            `${process.env.REACT_APP_API}/${url}`,
            config
            );
};


export const postresetPassword =  (payload, url) => {
    return  axios.post(
        `${process.env.REACT_APP_API}/${url}`,
        payload,
        );
};