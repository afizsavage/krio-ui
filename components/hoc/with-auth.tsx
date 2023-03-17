import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getCookie } from 'cookies-next';

const WithAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Wrapper = (props: P) => {
    const router = useRouter();

    useEffect(() => {
      const bearerToken = getCookie('bearerToken');

      if (!bearerToken) {
        router.push('/auth');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default WithAuth;
