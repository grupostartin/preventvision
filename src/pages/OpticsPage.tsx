import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { LensCard } from "@/components/ui/lens-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  Eye,
  Zap,
  Settings,
  Users,
  Laptop,
  Maximize,
  ArrowRightLeft,
  ZapOff,
  Sparkles,
  MousePointer2,
  CheckCircle2,
  Shield
} from "lucide-react";

const OpticsPage = () => {
  return (
    <div className="min-h-screen">
      {/* 1) Banner principal (Hero) - Updated in component */}
      <HeroSection />

      {/* 2) Bloco “Essência da marca” */}
      <AnimatedSection animation="fade-up" delay={200}>
        <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
          <div className="container mx-auto">
            <SectionHeader
              title="Um novo padrão de multifocal: conforto que se percebe no dia a dia"
              description={<>A Prevent Vision nasce para quem busca uma <strong>lente multifocal</strong> que entregue <strong>nitidez</strong>, <strong>estabilidade</strong> e <strong>transição suave</strong> entre longe, intermediário e perto — com um <strong>desenho avançado</strong> que prioriza <strong>conforto visual</strong>.</>}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-12">
              {[
                { icon: Maximize, text: "Campo visual amplo" },
                { icon: ZapOff, text: "Menos distorções laterais" },
                { icon: ArrowRightLeft, text: "Transição mais suave" },
                { icon: MousePointer2, text: "Ergonomia e conforto" },
                { icon: Sparkles, text: "Adaptação facilitada" },
                { icon: Users, text: "Equilíbrio binocular" }
              ].map((item, index) => (
                <AnimatedSection key={index} animation="scale" delay={300 + index * 100}>
                  <div className="bg-card/30 border tech-border rounded-2xl p-4 text-center backdrop-blur-sm h-full flex flex-col items-center justify-center hover:bg-primary/5 transition-colors group">
                    <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-medium leading-tight">{item.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 3) Bloco “Tecnologia por trás” */}
      <AnimatedSection animation="fade-up" delay={200}>
        <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-tech relative">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient">
                  Tecnologia Free Form: quando a lente é desenhada com precisão milimétrica
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  A tecnologia <strong>Free Form</strong> permite um desenho mais refinado e <strong>preciso</strong> da <strong>lente multifocal</strong>,
                  otimizando as áreas de visão para melhorar o <strong>desempenho</strong> em diferentes distâncias. Na
                  prática, isso se traduz em mais <strong>naturalidade na visão</strong>, melhor aproveitamento do
                  <strong> campo visual</strong> e redução de <strong>desconfortos periféricos</strong>.
                </p>
                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-2xl">
                  <p className="text-foreground font-semibold italic">
                    Produção com máquinas de última geração e lapidação de <strong>alta precisão</strong> para
                    <strong> personalização do design</strong>.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />
                <div className="relative rounded-2xl overflow-hidden border tech-border aspect-[4/3]">
                  <img
                    src="/blocagem-eologica-braslab.jpg.jpeg"
                    alt="Processo de blocagem ecológica — precisão na fabricação de lentes Prevent Vision"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-primary font-bold tracking-tighter text-lg">FREE FORM</p>
                    <p className="text-xs text-muted-foreground tracking-widest uppercase">Tecnologia Digital</p>
                  </div>
                </div>
                {/* Decorative dots */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 4) Bloco “Experiência visual” */}
      <AnimatedSection animation="fade-up" delay={200}>
        <section className="py-20 sm:py-28 px-4 sm:px-6">
          <div className="container mx-auto">
            <SectionHeader
              title="Mais estabilidade para longe. Mais conforto para perto. Mais leveza na adaptação."
              description={<>Uma <strong>lente multifocal bem projetada</strong> não é só “enxergar”: é <strong>se adaptar</strong> com mais tranquilidade, sentir o olhar mais <strong>estável</strong> ao se movimentar e ter <strong>conforto</strong> em atividades como <strong>leitura, telas, trabalho e direção</strong>.</>}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Rotinas digitais (telas)", icon: Laptop },
                { title: "Leitura e foco de perto", icon: Eye },
                { title: "Mobilidade e direção", icon: Zap },
                { title: "Ambientes internos e externos", icon: Shield }
              ].map((topic, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card border tech-border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <topic.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-sm">{topic.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 5) Seção “Linhas Prevent Vision” */}
      <AnimatedSection animation="fade-up" delay={200}>
        <section id="linhas-vision" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-tech">
          <div className="container mx-auto">
            <SectionHeader
              title="Linhas Prevent Vision: níveis de performance para diferentes rotinas"
              description={<>Cada linha foi desenhada para atender <strong>perfis distintos</strong> — mantendo a base de <strong>tecnologia</strong>, <strong>precisão</strong> e <strong>conforto visual</strong>.</>}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <LensCard
                title="Prevent Vision 6K"
                subtitle="Campos bem definidos e conforto consistente."
                description="Uma lente multifocal com desempenho equilibrado para quem busca boa nitidez, com intermediário e perto bem estruturados, oferecendo uma experiência segura para a rotina."
                imageUrl="/vision-6k.png"
                icon={<Eye className="w-8 h-8 text-primary" />}
                features={[
                  "Campos bem definidos",
                  "Ergonomia e conforto",
                  "Campo visual consistente"
                ]}
              />

              <LensCard
                title="Prevent Vision 8K"
                subtitle="Equilíbrio inteligente para uma rotina moderna e conectada."
                description="Desenvolvida para entregar ótimo desempenho no intermediário e perto, trazendo mais conforto para quem alterna entre smartphone, tablet e computador."
                imageUrl="/vision-8k.png"
                icon={<Laptop className="w-8 h-8 text-primary" />}
                features={[
                  "Intermediário mais confortável",
                  "Uso de telas com mais estabilidade",
                  "Transição suave no dia a dia"
                ]}
              />

              <LensCard
                title="Prevent Vision 10K"
                subtitle="Conforto superior com menor instabilidade periférica."
                description="Uma lente feita para otimizar o campo de visão e reduzir incômodos comuns, trazendo uma sensação mais fluida ao caminhar, trabalhar e alternar distâncias."
                imageUrl="/vision-10k.png"
                icon={<Settings className="w-8 h-8 text-primary" />}
                features={[
                  "Mais estabilidade periférica",
                  "Intermediário otimizado",
                  "Conforto para rotina ativa"
                ]}
              />

              <LensCard
                title="Prevent Vision 12K"
                highlight={true}
                subtitle="Performance máxima com precisão em todas as direções."
                description="A linha mais avançada da Prevent Vision, desenhada para quem exige grande campo visual, conforto contínuo e máxima precisão no uso diário."
                imageUrl="/vision-12k.png"
                icon={<Sparkles className="w-8 h-8 text-accent" />}
                features={[
                  "Campo visual amplificado",
                  "Precisão e equilíbrio binocular",
                  "Adaptação mais natural"
                ]}
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 6) Seção “Prevent Vision Work” */}
      <AnimatedSection animation="fade-up" delay={200}>
        <section className="py-20 sm:py-28 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto bg-card/30 border tech-border rounded-3xl overflow-hidden backdrop-blur-sm">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                    Ambientes Internos
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
                    Prevent Vision Work
                  </h2>
                  <p className="text-xl text-primary font-medium mb-6">
                    Pensada para ambientes internos e curta distância
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Uma lente voltada para usuários que trabalham em <strong>ambientes fechados</strong> e usam <strong>visão de
                      curta distância e intermediária</strong> com frequência — como professores, programadores,
                    dentistas e profissionais de escritório. O objetivo é entregar <strong>conforto</strong> e <strong>eficiência no foco
                      de trabalho</strong>.
                  </p>

                  <div className="space-y-4">
                    {[
                      "Conforto para telas e tarefas de curta distância",
                      "Rotina interna com mais leveza visual",
                      "Intermediário funcional e estável"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-muted/10 relative overflow-hidden group">
                  <img
                    src="/vision-work.png"
                    alt="Profissional trabalhando - Prevent Vision Work"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-l" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 7) Bloco de credibilidade (educativo) */}
      <AnimatedSection animation="fade-up" delay={200}>
        <section className="py-20 sm:py-28 px-4 sm:px-6 bg-primary/5">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gradient">
              A adaptação de uma lente multifocal depende do projeto — e da precisão da produção
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Uma boa experiência com <strong>lentes multifocais</strong> é resultado de três pilares: <strong>desenho
                avançado</strong>, <strong>produção precisa</strong> e <strong>escolha correta da linha</strong> para o perfil do usuário. A
              Prevent Vision foi estruturada para entregar exatamente isso: uma <strong>lente multifocal</strong> com
              <strong> engenharia visual</strong> e <strong>precisão no processo</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { label: "Desenho Avançado", value: "100%" },
                { label: "Produção Precisa", value: "Microns" },
                { label: "Escolha Correta", value: "Perfil" }
              ].map((item, i) => (
                <div key={i} className="p-6 border tech-border rounded-2xl bg-card">
                  <p className="text-3xl font-bold text-primary mb-2">{item.value}</p>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Foto de linha de produção */}
            <div className="relative mt-12 rounded-2xl overflow-hidden border tech-border group max-w-3xl mx-auto">
              <img
                src="/braslab4.jpg.jpeg"
                alt="Linha de produção automatizada — laboratório Prevent Vision"
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-sm text-primary font-semibold uppercase tracking-widest">Produção de alta precisão</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 8) Encerramento institucional (sem CTA) */}
      <section className="py-24 sm:py-32 px-6 bg-gradient-hero relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-background/90" />
        <div className="container mx-auto relative z-10">
          <AnimatedSection animation="scale" delay={200}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
              Prevent Vision: tecnologia que melhora o modo como você vive a visão.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xl md:text-2xl text-muted-foreground font-light italic">
              <span>Mais naturalidade.</span>
              <span className="w-2 h-2 bg-primary rounded-full hidden md:block" />
              <span>Mais conforto.</span>
              <span className="w-2 h-2 bg-primary rounded-full hidden md:block" />
              <span>Mais performance em todas as distâncias.</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div >
  );
};

export default OpticsPage;