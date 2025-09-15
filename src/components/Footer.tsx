import { Leaf } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Leaf className="h-6 w-6" />
          <span className="text-lg font-bold">GreenHarvest Agriculture</span>
        </div>
        <p className="text-gray-400">
          Cultivating excellence in sustainable agriculture since 2009
        </p>
      </div>
    </footer>
  );
};

export default Footer;