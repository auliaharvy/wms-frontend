// sections
import { JwtLoginView } from 'src/sections/auth/jwt';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'WMS: Login',
};

export default function LoginPage() {
  return <JwtLoginView />;
}
