import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from './cat.json';
import './Footer.css';

function Footer() {
  const container = useRef(null)

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    });
    return () => { Lottie.destroy() }
    
  }, [])
  
  

  return (
    <div className="cat-animation">
      <div className="container" ref={container}>
      </div>
    </div>
  )
}

export default Footer;