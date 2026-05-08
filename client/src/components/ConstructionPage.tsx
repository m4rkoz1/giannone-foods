import Logo from './Logo';
import ConstructionMessage from './ConstructionMessage';
import constructionBg from '@assets/generated_images/Cartoon_construction_workers_background_b9a1afa1.png';

export default function ConstructionPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${constructionBg})` }}
        data-testid="background-construction"
      />
      
      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-6xl mx-auto text-center space-y-12">
          
          {/* Logo Section */}
          <div className="space-y-4" data-testid="section-logo">
            <Logo size="xl" className="mb-4" />
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-chart-2 to-primary mx-auto rounded-full" />
          </div>
          
          {/* Construction Message */}
          <ConstructionMessage className="space-y-8" />
          
          {/* Footer Section */}
          <div className="pt-12 border-t border-border/50">
            <p className="text-sm text-muted-foreground font-[Inter]" data-testid="text-footer">
              © 2024 Giannone Foods. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-primary rounded-full animate-pulse opacity-60" />
      <div className="absolute top-20 right-20 w-3 h-3 bg-chart-2 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-chart-3 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-70" style={{ animationDelay: '0.5s' }} />
    </div>
  );
}