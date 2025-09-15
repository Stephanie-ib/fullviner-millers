import { ArrowRight, CheckCircle } from "lucide-react";

const CommunitySection: React.FC = () => {
  const programs = [
    {
      title: "Training Programs",
      description: "Regular workshops on modern farming techniques and best practices"
    },
    {
      title: "Quality Seeds",
      description: "Access to certified seeds, fertilizers, and farming equipment"
    },
    {
      title: "Market Guarantee",
      description: "Guaranteed purchase of produce and fair pricing for quality produce"
    }
  ];

  const stats = [
    { number: "300+", label: "Partner Farmers", description: "Active registered farmers in our network across the regions" },
    { number: "25+", label: "Training Sessions", description: "Annual workshops and field days for continuous training" },
    { number: "95%", label: "Success Rate", description: "Of farmers report increased yields and income through our program" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Growing Outgrowers Communities</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're committed to building strong partnerships with local farmers, providing training, resources, 
            and market access to create thriving agricultural communities.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">Supporting Local Farmers</h3>
          <p className="text-gray-600 mb-8">
            Our outgrower programs connects smallholder farmers with modern agricultural techniques, quality seeds, and guaranteed market access. 
            We're dedicated to building a sustainable agricultural ecosystem that benefits everyone.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">{program.title}</h4>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center">
            Join Our Outgrower Program
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection