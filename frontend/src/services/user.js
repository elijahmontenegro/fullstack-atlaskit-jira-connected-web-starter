import Cookies from 'js-cookie';

const logout = () => {
  Cookies.remove('jwt');
  window.location = '/home';
};

export {
  logout,
};