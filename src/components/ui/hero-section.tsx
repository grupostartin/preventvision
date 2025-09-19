import { Button } from "./button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-blue/15 rounded-full blur-3xl animate-float" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-slide-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
            Ótica Previne
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-foreground/90 font-light">
            Tecnologia em Visão
          </p>
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Inovação em lentes oftálmicas com tecnologia de ponta para uma visão perfeita
          </p>
          
          {/* Video placeholder */}
          <div className="bg-card/50 border tech-border rounded-2xl p-8 mb-12 backdrop-blur-sm">
            <div className="aspect-video bg-muted/30 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-muted-foreground">Espaço reservado para vídeo</p>
              </div>
            </div>
          </div>
          
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Conheça Nossas Lentes
          </Button>
        </div>
      </div>
    </section>
  );
};