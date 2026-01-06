const Hero = () => {
  return (
    <section className="text-center p-8">
      <h2 className="font-bold text-xl md:text-3xl lg:text-5xl 
       bg-gradient-to-r from-blue-500 to-purple-600
        bg-clip-text text-transparent mb-6">
        Tailwind CSS with React
      </h2>

      <div className="inline-block rounded-lg shadow-lg overflow-hidden 
        transform transition hover:scale-105">
        <img src="https://picsum.photos/500/300" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
