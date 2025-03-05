import { axiosInstance } from '../../../api/base';
import { AxiosError } from 'axios';
import { AccessToken, SignIn, SignUp } from '../types/auth';

export const signUp = async (signUpObject: SignUp) => {
  try {
    return await axiosInstance.post<void>('/auth/signup', signUpObject);
  } catch (error: unknown) {
    if (error instanceof AxiosError) throw parseAuthError(error);
    throw error;
  }
};

export const signIn = async (signInObject: SignIn) => {
  try {
    return (await axiosInstance.post<AccessToken>('/auth/signin', signInObject))
      .data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) throw parseAuthError(error);
    throw error;
  }
};

const parseAuthError = (error: AxiosError<any, any>) => {
  return {
    code: error.response?.data.statusCode,
    message: error.response?.data.message,
  };
};
