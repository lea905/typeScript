import type { User } from '@/models/User.model';
import { useUserApi } from './userApi';

const userApi = useUserApi();
const usersList: User[] = [];
export function useUserService() {
  return {
    async authenticate(user: User): Promise<User> {
      user.token = await userApi.authenticate(user);
      return user;
    },
    usersList,
  };
}
