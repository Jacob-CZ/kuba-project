import React, { useRef, useState } from "react";
import "./component_css/ProductCard.css";
export default function ProductCard( product) {
  const [isCentered, setIsCentered] = useState(false);
  const elementRef = useRef(null);
  const expandElement = () => {
    elementRef.current.style.position = "fixed";
    
    



  }
  const centerElement = () => {
    if (!isCentered) {
      elementRef.current.style.transform = "none";
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      setIsCentered(true);
      elementRef.current.style.zIndex = "20";
     
    }

    
    const elementRect = elementRef.current.getBoundingClientRect();
    

    const centerX = (window.innerWidth / 2) - (elementRect.width / 2);
    const centerY = (window.innerHeight / 2) - (elementRect.height / 2);

    const translateX = centerX - elementRect.left;
    const translateY = centerY - elementRect.top;

    elementRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
    if (isCentered) {
      elementRef.current.style.transform = "none";
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
      setIsCentered(false);
      setTimeout(() => { elementRef.current.style.zIndex = "1"; }, 500);
    }

  };

  return (
    <>
    <div onClick={centerElement} ref={elementRef} className="cardDiv">
      <img src={product.img} alt="" className="pic"/>
      <h1 className="productTitle">{product.name}</h1>
      <p>{product.description}</p>
    </div>
    {isCentered && (
      <div className="overlay">
      
      </div>
    )}
    </>
  );
}