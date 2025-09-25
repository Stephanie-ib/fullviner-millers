import { CheckCircle } from "lucide-react";

const CropProduction: React.FC = () => {
  const crops = [
    {
      name: "Maize Production",
      image:
        "https://media.istockphoto.com/id/1421187500/photo/a-field-of-corn-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=vjlilVMpqKaateO9TKT6B9RnIG89NfYTEuXlkKAECK4=",
      headline:
        "Premium quality maize grown using advanced irrigation systems and optimal fertilization programs.",
      features: [
        "High yield variables",
        "Drought-resistant strains",
        "Year-round production",
      ],
    },
    {
      name: "Soya Production",
      image:
        "https://media.istockphoto.com/id/1476756275/photo/soy-beans.webp?a=1&b=1&s=612x612&w=0&k=20&c=jTr7gkgJ4Q3dBOzC68ZAp6qQ1TCnekGXhpMMQgfz4lI=",
      headline:
        "Nutrient-rich soybeans cultivated with precision agriculture techniques for maximum protein content.",
      features: [
        "High protein varieties",
        "Organic options available",
        "Sustainable cultivation",
      ],
    },
    {
      name: "Rice Production",
      image:
        "https://images.unsplash.com/photo-1698406283879-232b17e54a8d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZSUyMHBsYW50fGVufDB8fDB8fHww",
      headline:
        "Premium rice varieties grown in controlled environments with optimal water management systems.",
      features: [
        "Multiple varieties",
        "Water-efficient growing",
        "Quality grain production",
      ],
    },
  ];

  return (
    <section id="crops" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Crop Production
          </h2>
          <p className="text-gray-600">
            We specialize in the cultivation of high-quality staple crops using
            modern farming techniques and sustainable practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {crops.map((crop, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center text-6xl">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {crop.name}
                </h3>
                <h4 className="text-lg mb-3 text-gray-700">{crop.headline}</h4>
                <ul className="space-y-2">
                  {crop.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CropProduction;
