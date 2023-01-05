import { useAppSelector } from 'store/hook';

export function useAuth() {
  const user = useAppSelector((store) => store.user.user);
  return user;
}
