import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { LensCard } from "@/components/ui/lens-card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Shield, Eye, Zap, Settings, Users, Laptop } from "lucide-react";

const OpticsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Blue Filter Section */}
      <AnimatedSection animation="fade-up" delay={200}>
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
          <div className="container mx-auto">
            <SectionHeader 
              title="Filtro Blue"
              subtitle="Proteção"
              description="Proteção UV e luz azul para sua diversificada vida cotidiana. Proteção contra luz azul indispensável. Visão diária protegida para todas as lentes Vision Class."
            />
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 border tech-border rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm">
                <div className="aspect-video bg-muted/30 rounded-xl overflow-hidden mb-4 sm:mb-6">
                  <img 
                    src="/oculos.png" 
                    alt="Óculos com paisagem de montanha - Filtro Blue Prevent Vision"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-primary">Proteção UV</h4>
                    <p className="text-muted-foreground">Filtragem completa dos raios ultravioleta nocivos</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-primary">Luz Azul</h4>
                    <p className="text-muted-foreground">Redução da luz azul emitida por dispositivos digitais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Prevent Vision Lenses */}
      <AnimatedSection animation="fade-up" delay={300}>
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-tech">
          <div className="container mx-auto">
            <SectionHeader 
              title="Lentes Prevent Vision"
              description="Tecnologia avançada para cada necessidade visual"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <AnimatedSection animation="fade-left" delay={400}>
                <LensCard
                  title="Prevent Vision 6K"
                  icon={<Eye className="w-8 h-8 text-primary" />}
                  features={[
                    "Redução do astigmatismo indesejável",
                    "Precisão em todas as direções",
                    "Ergonomia e conforto",
                    "Campos visuais incomparáveis"
                  ]}
                />
              </AnimatedSection>
              
              <AnimatedSection animation="fade-right" delay={500}>
                <LensCard
                  title="Prevent Vision 8K"
                  icon={<Zap className="w-8 h-8 text-primary" />}
                  features={[
                    "Astigmatismo marginal mínimo",
                    "Redução do astigmatismo indesejável",
                    "Precisão em todas as direções",
                    "Ergonomia e conforto",
                    "Melhoria de espessura",
                    "Campos visuais incomparáveis"
                  ]}
                />
              </AnimatedSection>
              
              <AnimatedSection animation="fade-left" delay={600}>
                <LensCard
                  title="Prevent Vision 10K"
                  icon={<Settings className="w-8 h-8 text-primary" />}
                  features={[
                    "Conforto excepcional periférico",
                    "Redução do astigmatismo indesejável",
                    "Precisão em todas as direções",
                    "Ergonomia e conforto",
                    "Melhoria de espessura",
                    "Perfil Digital (DP)",
                    "Campos visuais incomparáveis"
                  ]}
                />
              </AnimatedSection>
              
              <AnimatedSection animation="fade-right" delay={700}>
                <LensCard
                  title="Prevent Vision 12K"
                  icon={<Eye className="w-8 h-8 text-accent" />}
                  highlight={true}
                  features={[
                    "Tecnologia Free Form",
                    "Campo visual equilibrado",
                    "Redução do astigmatismo indesejável",
                    "Precisão em todas as direções",
                    "Ergonomia e conforto",
                    "Melhoria de espessura",
                    "Perfil Digital (DP)",
                    "Personalizada",
                    "Campos visuais incomparáveis",
                    "Balança binocular"
                  ]}
                />
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Polarized Lenses */}
      <AnimatedSection animation="fade-up" delay={200}>
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
          <div className="container mx-auto">
            <SectionHeader 
              title="O que são lentes polarizadas?"
              description="Feitas para amenizar os impactos da luz e reflexo nos olhos. Eficazes contra raios UVA e UVB. Filtro que protege os olhos da radiação solar. Conforto visual com tecnologia de aumento de contraste."
            />
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <AnimatedSection animation="fade-left" delay={300}>
                  <div>
                    <div className="bg-card/50 border tech-border rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm mb-6 sm:mb-8">
                      <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gradient">Comparação Visual</h4>
                      <div className="space-y-4 sm:space-y-6">
                        <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                          <span>Lente comum</span>
                          <div className="w-16 h-8 bg-gradient-to-r from-muted to-tech-gray rounded opacity-70" />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                          <span>Lente polarizada</span>
                          <div className="w-16 h-8 bg-gradient-primary rounded shadow-glow" />
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-right" delay={400}>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-card/50 border tech-border rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
                      <Shield className="w-12 h-12 text-primary mb-4" />
                      <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Proteção UV</h4>
                      <p className="text-muted-foreground">Filtragem completa dos raios UVA e UVB</p>
                    </div>
                    
                    <div className="bg-card/50 border tech-border rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
                      <Eye className="w-12 h-12 text-primary mb-4" />
                      <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Redução de Reflexos</h4>
                      <p className="text-muted-foreground">Elimina reflexos indesejados em superfícies</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Photosensitive Treatments */}
      <AnimatedSection animation="fade-up" delay={200}>
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-tech">
          <div className="container mx-auto">
            <SectionHeader 
              title="Fotossensível"
              subtitle="Lentes que escurecem em ambientes externos?"
              description="Transições rápidas de lentes transparentes para tonalidade cinza conforme intensidade dos Raios UV. Proporcionando proteção, praticidade e estilo incomparáveis. Descubra o poder das lentes que acompanham seu estilo de vida."
            />
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 border tech-border rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm">
                <div className="aspect-video bg-muted/30 rounded-xl overflow-hidden mb-4 sm:mb-6">
                  <img 
                    src="/mulher.png" 
                    alt="Mulher sorrindo com óculos - Lentes Fotossensíveis Prevent Vision"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                  <AnimatedSection animation="scale" delay={300}>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-transparent border-2 border-primary rounded-full mx-auto mb-3" />
                      <p className="text-sm">Transparente</p>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="scale" delay={400}>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/50 rounded-full mx-auto mb-3" />
                      <p className="text-sm">Transição</p>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="scale" delay={500}>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-tech-gray rounded-full mx-auto mb-3" />
                      <p className="text-sm">Escurecida</p>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Work Lenses */}
      <AnimatedSection animation="fade-up" delay={200}>
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
          <div className="container mx-auto">
            <SectionHeader 
              title="Office Prevent Vision Work"
              description="Feito para usuários que trabalham em ambientes fechados com curta distância. Ideal para professores, programadores, dentistas entre outros."
            />
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animation="fade-left" delay={300}>
                  <div>
                    <div className="bg-card/50 border tech-border rounded-2xl p-2 sm:p-4 backdrop-blur-sm">
                      <div className="aspect-[4/3] bg-muted/30 rounded-xl overflow-hidden">
                        <img 
                          src="/homem.png" 
                          alt="Homem trabalhando em ambiente fechado - Office Prevent Vision Work"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-right" delay={400}>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-8 text-gradient">Profissões Ideais</h4>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {[
                        { icon: Users, name: "Professores" },
                        { icon: Laptop, name: "Programadores" },
                        { icon: Eye, name: "Dentistas" },
                        { icon: Settings, name: "Outros" }
                      ].map((profession, index) => (
                        <AnimatedSection key={index} animation="scale" delay={500 + index * 100}>
                          <div className="bg-card/50 border tech-border rounded-xl p-3 sm:p-4 text-center backdrop-blur-sm hover:scale-105 transition-transform">
                            <profession.icon className="w-7 h-7 sm:w-8 sm:h-8 mx-auto mb-1.5 sm:mb-2 text-primary" />
                            <p className="text-xs sm:text-sm font-medium">{profession.name}</p>
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="fade-up" delay={200}>
        <section className="py-24 px-6 bg-gradient-hero relative">
          <div className="absolute inset-0 bg-background/80" />
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Pronto para uma nova visão?
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Descubra a tecnologia que vai transformar sua forma de ver o mundo
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedSection animation="scale" delay={300}>
                  <Button variant="hero" size="lg">
                    Agendar Consulta
                  </Button>
                </AnimatedSection>
                <AnimatedSection animation="scale" delay={400}>
                  <Button variant="outline" size="lg">
                    Falar com Especialista
                  </Button>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default OpticsPage;