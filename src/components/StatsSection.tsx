const StatsSection: React.FC = () => {
  const stats = [
    { number: "500+", label: "Acres Under Cultivation" },
    { number: "50+", label: "Greenhouse Units" },
    { number: "15+", label: "Years of Experience" },
    { number: "1000+", label: "Satisfied Customers" }
  ];

  return (
    <section className="py-16 bg-green-700 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-green-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection