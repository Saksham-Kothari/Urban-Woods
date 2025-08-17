import aboutImage from "../assets/about.webp";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
      <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">
        About
      </h2>
      <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
        <div className="mb-8 lg:mb-0">
          <img src={aboutImage} alt="About UrrbanWoods" className="w-full h-auto" />
        </div>
        <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-6">
          At UrrbanWoods, we believe that furniture is more than just utility—it’s the soul of a home.
          With a deep passion for craftsmanship and a commitment to timeless quality, we design and curate pieces that blend modern elegance with natural warmth.
          Our collection is thoughtfully crafted to suit diverse lifestyles, whether you’re creating a cozy corner, a stylish workspace, or a luxurious living area.
          Each piece reflects a harmony of design, comfort, and durability, ensuring that your home not only looks beautiful but also feels truly inviting.
          At UrrbanWoods, our mission is to bring nature-inspired sophistication into your living spaces, helping you create a home that tells your unique story.
        </p>
      </div>
    </section>
  );
};

export default About;