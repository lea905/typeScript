import axiosInstance from '@/config/AxiosConfig';
import { ApiUrlAuth } from '@/constants/ApiUrl';
import type { User } from '@/models/User.model';

export function useUserApi() {
  return {
    async authenticate(user: User): Promise<string> {
      const res = await axiosInstance.post<{ token: string }>(ApiUrlAuth, {
        grant_type: 'password',
        username: user.username,
        password: user.password,
      });

      if (res.status === 200) {
        return res.data.token;
      } else {
        return '';
      }
    },
  };
}
