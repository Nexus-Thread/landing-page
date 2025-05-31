import { Target, Users, Zap, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Focus",
      description: "Targeted solutions that deliver measurable results and exceed expectations."
    }, 
    {
      icon: Zap,
      title: "Rapid Innovation",
      description: "Fast execution with quality delivery that keeps you ahead of the curve."
    },
    {
      icon: Award,
      title: "Excellence Standard",
      description: "Quality is our foundation, excellence is our commitment to you."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#C3BAAF] via-[#C3BAAF]/80 to-[#C3BAAF]/60 relative overflow-hidden">
      {/* Clean background with subtle gradients only */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_30%,rgba(255,255,255,0.03)_50%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-white/20 backdrop-blur-sm border border-[#313B7B]/20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold text-[#313B7B] tracking-wide">ABOUT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#313B7B] mb-8 tracking-tight leading-tight">
            About <span className="bg-gradient-to-r from-[#6D0016] to-[#6D0016]/80 bg-clip-text text-transparent font-normal">Nexus Thread</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#313B7B]/85 max-w-3xl mx-auto leading-relaxed font-light">
            Technology solutions that anticipate tomorrow's opportunities and deliver today's results.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/95 backdrop-blur-sm border border-[#313B7B]/20 rounded-2xl p-8 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-[#6D0016]/10 hover:scale-105 hover:border-[#6D0016]/30"
            >
              <div className="bg-gradient-to-br from-[#6D0016] to-[#6D0016]/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#313B7B] mb-4 group-hover:text-[#6D0016] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-[#313B7B]/75 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom section */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-[#6D0016]/15 to-[#6D0016]/10 border border-[#6D0016]/25 rounded-2xl px-10 py-6 backdrop-blur-sm">
            <p className="text-[#6D0016] font-semibold text-lg mb-2">
              Ready to Transform Your Business?
            </p>
            <p className="text-[#313B7B]/70 text-sm">
              Let's discuss how we can help you achieve your goals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
