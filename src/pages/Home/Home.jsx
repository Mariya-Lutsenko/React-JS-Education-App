import React, {useState, useEffect} from 'react' 
import Hero from "./Hero/Hero"
import Loader from '../../components/Loader/Loader'


const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {loading ? <Loader /> : <Hero />}
     <Hero/>
    </>
  )
}

export default Home;
