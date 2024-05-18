import { USER_PATHS } from '@/common/users/users.paths';
import api from '../api';
import { SignInBody, SignUpBody } from './types';

const { SIGN_IN, CREATE_USER, GET_USERS } = USER_PATHS;

export const SignIn = async (data: SignInBody) =>
  await api.post(SIGN_IN, { data });

export const SignUp = async (data: SignUpBody) =>
  await api.post(CREATE_USER, { data });

export const findUserByEmail = async (email: string) =>
  await api.get<SignUpBody>(`${GET_USERS}?email=${email}`);
