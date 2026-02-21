import { Button } from "./button";
import preventLogo from "@/assets/prevent-logo.png";
import { useParallax } from "@/hooks/use-scroll-animation";
import { AnimatedGroup } from "./animated-group";
import { motion } from "framer-motion";
export const HeroSection = () => {
  const parallaxOffset1 = useParallax(0.3);
  const parallaxOffset2 = useParallax(0.5);
  const parallaxOffset3 = useParallax(0.7);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col overflow-hidden">
      {/* Animated background effects with parallax */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse-glow parallax-element"
          style={{ transform: `translateY(${parallaxOffset1}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-blue/15 rounded-full blur-3xl animate-float parallax-element"
          style={{ transform: `translateY(${parallaxOffset2}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-float parallax-element"
          style={{
            transform: `translateY(${parallaxOffset3}px) translateX(-50%)`,
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Logo at top */}
      <motion.div
        className="relative z-10 pt-6 md:pt-8 pb-3 md:pb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <img
            src={preventLogo}
            alt="Prevent Vision Logo"
            className="h-16 md:h-20 mx-auto mb-2"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-start justify-start md:items-center md:justify-center">
        <div className="container mx-auto px-4 sm:px-6 text-center pt-2 pb-10 md:pt-0 md:pb-0">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 30,
                  filter: 'blur(10px)',
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: {
                    type: 'spring',
                    bounce: 0.3,
                    duration: 1.2,
                  },
                },
              },
            }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: 1.5,
                  }
                },
              }}
            >
              Prevent Vision <br className="hidden sm:block" />
              <span className="text-2xl sm:text-4xl md:text-5xl block mt-2 opacity-90">
                Tecnologia em visão. Precisão feita para você.
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl md:text-2xl mb-6 text-foreground/90 font-light max-w-3xl mx-auto leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    bounce: 0.2,
                    duration: 1,
                    delay: 0.2,
                  }
                },
              }}
            >
              Lentes multifocais com tecnologia Free Form e produção de última geração para oferecer
              mais campo de visão, menos distorções laterais e adaptação mais fácil — com
              personalização real para diferentes rotinas.
            </motion.p>

            <motion.div
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-12"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    duration: 0.8,
                    delay: 0.4,
                  }
                },
              }}
            >
              <p className="text-sm sm:text-base text-primary font-medium">
                Engenharia óptica + lapidação de alta precisão para uma experiência mais natural do perto ao longe.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    bounce: 0.3,
                    duration: 1,
                    delay: 0.6,
                  }
                },
              }}
            >
              <Button
                variant="hero"
                size="lg"
                className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 h-auto"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('linhas-vision')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explorar Linhas Vision
              </Button>
            </motion.div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
};