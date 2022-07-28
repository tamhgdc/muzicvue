//封装axios
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';
// export  default axios
// axios.create({})==>axios的实例

const request = axios.create({
    baseURL: 'http://10.10.1.134:3000',
})
export default request;
