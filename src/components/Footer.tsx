import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#313B7B] text-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Nexus Thread</h3>
            <p className="text-white/80 leading-relaxed">
              Innovation meets excellence through cutting-edge technology solutions that transform businesses.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-4 h-4 text-[#6D0016]" />
                <span className="text-sm">123 Innovation Drive, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-4 h-4 text-[#6D0016]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-4 h-4 text-[#6D0016]" />
                <span className="text-sm">contact@nexusthread.com</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white mb-4">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-white/80">
                <Calendar className="w-4 h-4 text-[#6D0016]" />
                <div className="text-sm">
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat - Sun: By appointment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white mb-4">Legal</h4>
            <div className="space-y-2">
              <a href="#privacy" className="block text-white/80 hover:text-[#C3BAAF] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="block text-white/80 hover:text-[#C3BAAF] transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#cookies" className="block text-white/80 hover:text-[#C3BAAF] transition-colors text-sm">
                Cookie Policy
              </a>
              <a href="#compliance" className="block text-white/80 hover:text-[#C3BAAF] transition-colors text-sm">
                Compliance
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Company Registration & Legal Info */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-2">
              <p className="text-white/70 text-sm">
                Nexus Thread LLC | Registration #: 12345678 | Tax ID: 98-7654321
              </p>
              <p className="text-white/70 text-sm">
                Registered Office: 123 Innovation Drive, Tech City, TC 12345, United States
              </p>
              <p className="text-white/70 text-sm">
                Licensed Technology Solutions Provider | ISO 27001 Certified
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-white/70 text-sm">
                © {new Date().getFullYear()} Nexus Thread LLC. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Confidential and proprietary information
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
