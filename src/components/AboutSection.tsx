import { Award, Leaf, TrendingUp } from "lucide-react";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: "Sustainable Farming",
      description: "We use eco-friendly practices that preserve soil health and reduce environmental impact."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-600" />,
      title: "Modern Technology",
      description: "Our state-of-the-art equipment ensures optimal growing conditions year-round."
    },
    {
      icon: <Award className="h-12 w-12 text-green-600" />,
      title: "Quality Produce",
      description: "We deliver premium quality crops that meet the highest standards."
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About GreenHarvest Agriculture</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are a leading agricultural company dedicated to sustainable farming practices and 
            innovative crop production. Our commitment to quality and environmental stewardship drives 
            everything we do.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection