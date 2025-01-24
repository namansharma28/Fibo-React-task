import Slider from "./Swiper";
const HeroSection = () => {
  const scrollToContent = () => {
    document.querySelector('.other-content').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

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
          <button className="primary-btn">Start Reading</button>
          <button className="secondary-btn">Explore Genre</button>
        </div>

        <div className="shopping">
          <p>Available in Digital & Print.</p>

          <div className="brand-icons">
            <img
              className="available"
              src="/images/amazon.png"
              alt="amazon-logo"
            />
            <img
              className="available"
              src="/images/flipkart.png"
              alt="flipkart-logo"
            />
            <img
              className="available"
              src="/images/audible-logo.png"
              alt="audible-logo"
            />
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={scrollToContent}>
          <span>Scroll to explore more</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="other-content">
        <div className="more-data">
          <h1>Explore</h1>
          <h2>Why Read Atomic Habits?</h2>
          <ul>
            <li>"Learn how to make habits stick."</li>
            <li>"Discover the science of behavior change."</li>
            <li>"Transform small habits into life-changing outcomes."</li>
            <li>
              "Build Better Routines: Learn how to design habits that stick."
            </li>
            <li>
              "Break Bad Habits: Get actionable tips to replace harmful
              behaviors with positive ones."
            </li>
          </ul>
          <div className="slider-block">
            <Slider />
          </div>
          <h2>Explore Our Wide Collection</h2>
          <p>Highlight the variety of books available:</p>
          <ul>
            <li>
              Self-Help & Personal Development: Titles like Atomic Habits, The
              Power of Now, and Think and Grow Rich.
            </li>
            <li>
              Fiction: Bestsellers like The Alchemist, Where the Crawdads Sing,
              and 1984.
            </li>
            <li>
              Biographies & Memoirs: Inspiring stories like Becoming by Michelle
              Obama and Steve Jobs by Walter Isaacson.
            </li>
            <li>
              Children's Books: A magical collection of classics like Harry
              Potter, The Little Prince, and Charlotte's Web.
            </li>
            <li>
              Business & Entrepreneurship: Books like Zero to One, Start With
              Why, and The Lean Startup.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
