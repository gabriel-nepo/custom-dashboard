import Axios from 'axios';
import api from './api.js'

export const TOKEN_KEY = "@inprofile/token";
export const USER_TYPE = "@type-user";
export const USER = "@inprofile/user";
// export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_TYPE);
  localStorage.removeItem(USER);

};

// import api from './api.js'

export const isAuthenticated = async () => {
  try {
    await api.post("/verify").then(res => {
      // localStorage.setItem("@type-user",res.data.usuario.type);
    });
    console.log("deu bom")
    return true;

  }
  catch {
    console.log('deu ruim')
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_TYPE);
    localStorage.removeItem(USER);


    return false;
  }
}

// export default isAuthenticated;
