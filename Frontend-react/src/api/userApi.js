import { setUser, setToken, setUsername } from "../store/features/auth/authSlice";

const userLogin = (user) => async (dispatch) => {
  const request = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  const response = await request.json();
  if (request.status === 200) {
    dispatch(setToken({ token: response.body.token }));
    return response.body.token;
  }
  return null;
};

const userFetch = (token) => async (dispatch) => {
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
};

const updateUsername = (token, username) => async (dispatch) => {
  const request = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ userName: username })
  });
  if (request.status === 200) dispatch(setUsername(username));
  return request.status === 200;
};

export { userLogin, userFetch, updateUsername };
