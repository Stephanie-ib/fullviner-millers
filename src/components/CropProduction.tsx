import { CheckCircle } from "lucide-react";

const CropProduction: React.FC = () => {
  const crops = [
    {
      name: "Maize Production",
      image: "🌽",
      features: [
        "Premium quality yellow grain variety",
        "Enhanced nutritional content",
        "Drought-resistant strains",
        "Improved yield crop"
      ]
    },
    {
      name: "Soya Production",
      image: "🌿",
      features: [
        "Non-GMO soybeans cultivated with sustainable farming techniques",
        "High protein content for nutritional excellence",
        "Organic climate resistant",
        "Sustainable cultivation"
      ]
    },
    {
      name: "Rice Production",
      image: "🌾",
      features: [
        "Premium rice varieties grown in controlled environments",
        "Superior grain quality and exceptional taste",
        "Greenhouse grown",
        "Quality assured"
      ]
    }
  ];

  return (
    <section id="crops" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Crop Production</h2>
          <p className="text-gray-600">
            We specialize in the cultivation of high-quality staple crops using modern farming techniques 
            and sustainable practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {crops.map((crop, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center text-6xl">
                {crop.image}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{crop.name}</h3>
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

export default CropProduction