import { Lightbulb } from "lucide-react";

const GreenhouseOperations: React.FC = () => {
  const technologies = [
    {
      title: "Climate Control Systems",
      description: "Automated temperature, humidity, and ventilation control",
    },
    {
      title: "Hydroponic Systems",
      description: "Soil-less growing for maximum nutrient efficiency",
    },
    {
      title: "LED Growing Lights",
      description: "Energy-efficient lighting for optimal plant growth",
    },
  ];

  const vegetables = [
    {
      title: "Bell Peppers",
      image:
        "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVsbCUyMHBlcHBlcnN8ZW58MHx8MHx8fDA%3D",
      description: "Colorful, crisp bell peppers grown year-round",
    },
    {
      title: "Fluted Pumpkin (UGwu)",
      image:
        "https://thumbs.dreamstime.com/b/ugwu-vegetables-leave-source-blood-290754106.jpg",
      description: "Fresh, leafy cabbage with optimal nutrition",
    },
  ];

  return (
    <section id="greenhouse" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Greenhouse Operations
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our modern greenhouse facilities enable year-round production of
            fresh vegetables with precise climate control and optimal growing
            conditions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Advanced Greenhouse Technology
            </h3>
            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <Lightbulb className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {tech.title}
                    </h4>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {vegetables.map((vegetable, index) => (
              <div
                key={index}
                className="bg-white w-72 p-5 text-center rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="w-full mb-3 rounded-lg overflow-hidden">
                  <img
                    src={vegetable.image}
                    alt={vegetable.title}
                    className="w-full h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h4 className="font-semibold mb-2">{vegetable.title}</h4>
                <p className="text-sm text-gray-600">{vegetable.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenhouseOperations;
