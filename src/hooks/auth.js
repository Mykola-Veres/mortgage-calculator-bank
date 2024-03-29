import { useSelector } from 'react-redux/es/exports';

export function useAuth() {
  const { email, token, id } = useSelector(state => state.user);
  console.log('email', email);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
