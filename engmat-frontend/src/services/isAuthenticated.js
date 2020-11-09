export const TOKEN_KEY = "@engmat/token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

// import api from './api.js'

// const isAuthenticated = api.post('/verify', {},
//     {
//         headers: {
//             Authorization: 'Bearer ' + localStorage.getItem('@engmat/token')
//         }
//     }
// ).then((res) => {
//     console.log('ola')
//     return(true)
// }).catch(err => {
//     console.log(err);
//     return(false);
// });

// export default isAuthenticated;
