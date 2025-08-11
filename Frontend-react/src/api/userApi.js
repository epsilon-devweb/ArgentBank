import { setUser, setToken, setUsername } from "../store/features/auth/authSlice";

const methods = {
  userLogin(user) {
    return async (dispatch, getState) => {
      const request = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });
      const response = await request.json();
      if (request.status === 200) {
        dispatch(setToken({ token: response.body.token }));
        return response.body.token;
      } else {
        return null;
      }
    }
  },
  userFetch(token) {
    return async (dispatch, getState) => {
      const request = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const response = await request.json();
      if (request.status === 200) {
        dispatch(setUser(response.body));
        return response.body;
      }
    }
  },
  updateUsername(token, username) {
    return async (dispatch, getState) => {
      const request = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          'userName': username
        })
      });
      const response = await request.json();
      if (request.status === 200) dispatch(setUsername(username));
      return request.status === 200;
    }
  }
}

export const { userLogin, userFetch, updateUsername } = methods;