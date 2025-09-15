const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-green-800 to-green-600 text-white pt-24 pb-24">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Cultivating Excellence in Agriculture
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Leading the way in sustainable crop production and innovative greenhouse farming
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToAbout}
            className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Learn More
          </button>
          <button 
            onClick={scrollToContact}
            className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors transform hover:scale-105"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection