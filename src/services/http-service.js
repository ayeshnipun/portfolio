// package imports
import axios from 'axios';

const getAsync = async (url) => {
  return axios.get(url);
};

export default { getAsync };
