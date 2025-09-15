import { Lightbulb } from "lucide-react";

const GreenhouseOperations: React.FC = () => {
  const technologies = [
    {
      title: "Climate Control Systems",
      description: "Automated temperature, humidity, and ventilation control"
    },
    {
      title: "Hydroponic Systems",
      description: "Soil-free growing for maximum nutrient efficiency"
    },
    {
      title: "LED Growing Lights",
      description: "Energy-efficient lighting for optimal plant growth"
    }
  ];

  return (
    <section id="greenhouse" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Greenhouse Operations</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our modern greenhouse facilities enable year-round production of fresh vegetables with precise 
            climate control and optimal growing conditions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Advanced Greenhouse Technology</h3>
            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Lightbulb className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">{tech.title}</h4>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-100 rounded-lg p-6 text-center hover:bg-green-200 transition-colors">
              <div className="text-4xl mb-2">🌶️</div>
              <h4 className="font-semibold">Bell Peppers</h4>
              <p className="text-sm text-gray-600">Climate controlled year round</p>
            </div>
            <div className="bg-green-100 rounded-lg p-6 text-center hover:bg-green-200 transition-colors">
              <div className="text-4xl mb-2">🥬</div>
              <h4 className="font-semibold">Cabbage</h4>
              <p className="text-sm text-gray-600">Fresh, crisp quality nutrition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenhouseOperations