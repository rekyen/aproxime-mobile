// import { Alert } from 'react-native';
// import { takeLastest, call, put, all } from 'redux-saga/effects';

// import api from '~/services/api';

// import { signInSuccess, signInFailure } from './actions';

// export function* signIn({ payload }) {
//   try {
//     const { email, password } = payload;

//     const response = yield call(api.post, 'sessions', {
//       email,
//       password,
//     });

//     const { token, user } = response.data;

//     // if(user.provider) {
//     //   Alert.alert('Login error', 'Verify your access data');
//     //   return;
//     // }

//     api.defaults.headers.Authorization = `Bearer ${token}`;

//     yield put(signInSuccess(token, user));

//     //history.push('/dashboard');
//   } catch (err) {
//     Alert.alert('Authentication error', 'Verify your access data');

//     yield put(signInFailure());
//   }
// }

// export function* signUp({ payload }) {
//   try {
//     const { email, password } = payload;

//     yield call(api.post, 'users', {
//       email,
//       password,
//     });

//     //history.push('/');
//   } catch (err) {
//     Alert.alert('Registration error', 'Verify your access data');

//     yield put(signInFailure());
//   }
// }

// export function setToken({ payload }) {
//   if (!payload) {
//     return;
//   }

//   const { token } = payload.auth;

//   if (token) {
//     api.defaults.headers.Authorization = `Bearer ${token}`;
//   }
// }

// export function signOut() {
//   //history.push('/');
// }

// export default all([
//   takeLastest('persist/REHYDRATE', setToken),
//   takeLastest('@auth/SIGN_IN_REQUEST', signIn),
//   takeLastest('@auth/SIGN_UP_REQUEST', signUp),
//   takeLastest('@auth/SIGN_OUT', signOut),
// ]);
