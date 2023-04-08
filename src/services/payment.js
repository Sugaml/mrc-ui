import axios from 'axios';


export const getTransactions = (token, url) => {
    const config = {
        headers: { Authorization: `basic ${token}` }
    };
    return axios.get(
        `${process.env.REACT_APP_API}/${url}`,
        config
    );
};