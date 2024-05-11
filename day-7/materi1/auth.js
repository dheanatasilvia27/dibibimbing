import { API } from './urls.js';

// 
function login(username, pass) {
    console.log(`${API.BASE_URL}${API.AUTH.login}`);
    // const data = fetch(`${API.BASE_URL}${API.AUTH.login}`);
    // return data;
}

login();

// function register(username, pass) {
//     const data = fetch(`${API.BASE_URL}${API.AUTH.register}`);
//     return data;
// }
