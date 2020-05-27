import { useEffect } from "react";
import { useRouter } from "next/router";


const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/cart');
  }, []);

  return null;
}

export default Home;
