import type { User } from '@/models/User.model';
import { ref } from 'vue';

const userConnecte = ref<User>({ id: -1, username: '', password: '' });

export function useUserConnecteService() {
  return {
    userConnecte,
  };
}
