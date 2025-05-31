
import { useState } from 'react';
import { Phone, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      toast({
        title: "Success!",
        description: "We'll contact you shortly to schedule a call.",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-[#C3BAAF] via-[#C3BAAF]/80 to-[#C3BAAF]/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-[#313B7B]/20 p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-light text-[#313B7B] mb-6 tracking-tight">We'll Be In Touch!</h3>
              <p className="text-[#313B7B]/80 text-xl mb-8 leading-relaxed">
                Thank you for your interest. Our team will contact you within 24 hours.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                size="lg"
                className="border-2 border-[#313B7B]/30 text-[#313B7B] hover:bg-white/90 hover:border-[#313B7B]/50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-[#C3BAAF] via-[#C3BAAF]/80 to-[#C3BAAF]/60">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-[#313B7B]/20 p-12 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-block bg-white/30 backdrop-blur-sm border border-[#313B7B]/20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-semibold text-[#313B7B] tracking-wide">GET IN TOUCH</span>
            </div>
            
            <div className="w-20 h-20 bg-gradient-to-br from-[#6D0016] to-[#6D0016]/80 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Phone className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-4xl md:text-5xl font-light text-[#313B7B] mb-8 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-[#6D0016] to-[#6D0016]/80 bg-clip-text text-transparent font-normal">Contact Us</span>
            </h3>
            
            <p className="text-xl md:text-2xl text-[#313B7B]/85 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Schedule a consultation to discuss your technology needs and discover how we can help.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 text-lg border-2 border-[#313B7B]/30 focus:border-[#6D0016] focus:ring-[#6D0016]/20 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  size="lg"
                  className="bg-[#313B7B] hover:bg-[#313B7B]/90 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#313B7B]/25 hover:scale-105 group border-0"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  )}
                </Button>
              </div>
            </form>
            
            <p className="text-sm text-[#313B7B]/65 mt-8 font-medium">
              We'll respond within 24 hours • Free consultation • No spam, ever
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
