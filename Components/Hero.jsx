const Hero = () => {
  return (
    <main className="container hero">
      <div className="hero-content">
      <div>
        <h1>YOUR FEET DESERVE THE BEST</h1>
      </div>
      <div>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
      </div>
      <div className="hero-btn">
        <button> Shop Now</button>
        <button className="secondary-btn"> Category</button>
      </div>

      
      <div className="shopping">
        <div>
          <p>Also Available On</p>
        </div>
        <div className="icons">
          <img src="public/images/flipkart.png"></img>
          <img src="public/images/amazon.png"></img>
        </div>
      </div>
      </div>
      <div>
        <img src="public/images/shoe_image.png"></img>
      </div>
    </main>
  );
};
export default Hero;
