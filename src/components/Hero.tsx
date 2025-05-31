import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#C3BAAF] via-[#C3BAAF]/80 to-[#C3BAAF]/60 overflow-hidden">
      {/* Clean background with subtle gradients only */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.02)_50%,transparent_60%)]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#313B7B]/25 rounded-full px-5 py-3 mb-10 shadow-lg hover:shadow-xl transition-all duration-300">
          <Sparkles className="w-4 h-4 text-[#6D0016]" />
          <span className="text-sm font-semibold text-[#313B7B] tracking-wide">NEXUS THREAD</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-[#313B7B] mb-8 tracking-tight leading-none">
          <span className="block">Driving Innovation</span>
          <span className="block text-[#6D0016]">Forward</span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-[#313B7B]/85 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
          Where Leadership Drives Excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-[#313B7B] hover:bg-[#313B7B]/90 text-white px-10 py-5 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#313B7B]/25 hover:scale-105 group border-0"
          >
            Get Started Today
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-[#313B7B]/40 text-[#313B7B] hover:bg-white/90 hover:border-[#313B7B]/60 px-10 py-5 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg bg-white/70 backdrop-blur-sm"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
