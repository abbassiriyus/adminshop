import axios from 'axios';
// export const host = window.location.protocol=="https:"?("https://api.photobuy.iteen.uz"):("http://api.photobuy.iteen.uz");

export const host = "https://api.photobuy.iteen.uz"
export const  access_token =localStorage.getItem('token')
export const lang =(localStorage.getItem('lang')==null?("ru"):(localStorage.getItem('lang')));

// console.log(window.location.protocol);
export function httpRequest(config){
    return axios({
      ...config,
    }); 
   
  };
