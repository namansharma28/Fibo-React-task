const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>
          TURN PAGES,<br></br> FIND WORLDS.
        </h1>
        <p>
          Discover how small changes can create remarkable results. Atomic
          Habits by James Clear is your guide to building habits that last.
        </p>
        <div className="hero-image">
          <img src="/images/hero-image.png" alt="hero-image" />
        </div>

        <div className="hero-btn">
          <button>Start Reading</button>
          <button className="secondary-btn">Explore Genre</button>
        </div>

        <div className="shopping">
          <p>Available in Digital & Print.</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
            <img src="/images/audible-logo.png" alt="audible-logo" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
