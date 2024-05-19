/* eslint-disable @typescript-eslint/no-explicit-any */
// import { SignInDataResponse } from 'interface/user.interface';
import axiosClient from './axiosClient';

const AuthApi = {
  signIn: async (code: string): Promise<any> => {
    return await axiosClient.post('/auth/login', { code });
  },

  getMe: async (): Promise<any> => {
    return await axiosClient.get('/auth/me');
  },
};

export default AuthApi;
