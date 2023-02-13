import React from "react";
import mobileImg from "./assets/image-product-mobile.png"
import desktopImg from "./assets/image-product-desktop.png"
import iconCart from "./assets/icon-cart.svg"
import "./styles/styles.scss";

const App = () => {
  return (
    <>
    <main>
      <section className="cardContainer">
        <div className="cardContainer__ImgContainer">
          <img src={mobileImg} alt="" className="cardContainer__ImgContainer--mobileImg"/>
          <img src={desktopImg} alt="" className="cardContainer__ImgContainer--desktopImg"/>
        </div>
        <div className="cardContainer__ProductInfo">
          <p>PERFUME</p>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p> A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className="cardContainer__productInfo--price">
            <p>$149.99</p>
            <p>$169.99</p>
          </div>
          <button>
            <img src={iconCart} alt="" className="productInfo__button--iconCart" />
            <p>Add to Cart</p>
          </button>
        </div>
      </section>
    </main>

    <footer>
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/rauljariasz/" target="_blank">Raul Arias</a>.
    </div>
    </footer>
    </>
  )
}

export default App;
