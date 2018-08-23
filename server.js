import axios from 'axios';
const http = {
  post: '',
  get: ''
};

http.post = function (api) {
  return new Promise(resolve => {
    axios.post(api).then(res => {
      resolve(res);
    });
  });
};

export default http;
