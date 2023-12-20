import { useEffect, useState } from 'react'

function useWindowWidth() {
  const [width, setWidth] = useState('');

  useEffect(()=> {
    setWidth(window.innerWidth);
    
  }, [width]);

  return width;
}

export default useWindowWidth;