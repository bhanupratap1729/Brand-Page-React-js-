const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
        <a href="https://www.nike.com/in/">
          <button>Shop Now</button>
          </a>
          <a href="https://www.nike.com/in/men">
          <button className="secondary-btn">Category</button>
          </a>
        
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
          <a href =" https://www.amazon.in/nike-shoes/s?k=nike+shoes">
            <img src="/images/amazon.png" alt="amazon-logo" />
            </a>
            <a href ="https://www.flipkart.com/mens-footwear/sports-shoes/nike~brand/pr?sid=osp%2Ccil%2C1cu">
            <img src="/images/flipkart.png" alt="flipkart-logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;