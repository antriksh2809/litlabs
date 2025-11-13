import { Facebook, Twitter, Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold">L.I.T. LABS</span>
            </div>
            <p className="text-muted-foreground">
              Building future-ready schools through hands-on learning in AI, Robotics, IoT, and Emerging Technologies.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#innovation-labs" className="text-muted-foreground hover:text-primary transition-colors">Innovation Labs</a></li>
              <li><a href="#kits" className="text-muted-foreground hover:text-primary transition-colors">AI & Robotics Kits</a></li>
              <li><a href="#workshops" className="text-muted-foreground hover:text-primary transition-colors">Workshops</a></li>
              <li><a href="#science-parks" className="text-muted-foreground hover:text-primary transition-colors">Science Parks</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#teacher-training" className="text-muted-foreground hover:text-primary transition-colors">Teacher Training</a></li>
              <li><a href="#tlm" className="text-muted-foreground hover:text-primary transition-colors">TLM Kits</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="https://www.litlabs.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">www.litlabs.in</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+918468076121" className="hover:text-primary transition-colors">+91 8468076121</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:support@litlabs.in" className="hover:text-primary transition-colors">support@litlabs.in</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="https://www.litlabs.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.litlabs.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 L.I.T. LABS. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;