import Head from 'next/head';
import { ShopLayout } from 'components/Products/Shop';

const Login = (): JSX.Element => {
  return (
    <ShopLayout>
      <Head>
        <title>PLAY! SHOP - Login</title>
      </Head>

      <p>Login Page</p>
    </ShopLayout>
  );
};

export default Login;