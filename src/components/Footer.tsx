import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const products = [
    "Robotics & IoT",
    "Artificial Intelligence",
    "Drones & Aeromodelling",
    "3D Printing & Prototyping"
  ];

  const company = [
    "About Us",
    "Our Team",
    "Partnerships",
    "Careers"
  ];

  const resources = [
    "Blog",
    "Curriculum Guide",
    "FAQ",
    "Support Center"
  ];

  const legal = [
    "Terms & Conditions",
    "Privacy Policy",
    "Contact Information",
    "Certifications"
  ];

  return (
    <footer className="bg-accent text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/Gemini_Generated_Image_mey00qmey00qmey0.png" 
                alt="L.I.T. Labs Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">L.I.T. Labs</span>
            </div>
            <p className="text-muted mb-4">
              Learn. Innovate. Transform. The complete 21st century skills ecosystem for schools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <Link to={`/products/${product.toLowerCase().replace(/ /g, '-')}`} className="text-muted hover:text-white transition-colors">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-muted hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link to={`/${resource.toLowerCase().replace(/ /g, '-')}`} className="text-muted hover:text-white transition-colors">
                    {resource}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-muted hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-muted/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted text-sm">
                © 2025 L.I.T. Labs. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>17b/37 17b/37 rupnagar, IIT Campus, Rupnagar, PB-140001, India</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@litlabs.in</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91-8468076121</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;