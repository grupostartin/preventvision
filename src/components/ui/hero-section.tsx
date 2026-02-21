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
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              className="text-left"
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient leading-tight"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0.4,
                      duration: 1.5,
                    }
                  },
                }}
              >
                Prevent Vision
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl mb-8 text-foreground/90 font-light max-w-2xl leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                Lentes multifocais com tecnologia Free Form e produção de última geração para oferecer
                mais campo de visão, menos distorções laterais e adaptação mais fácil.
              </motion.p>

              <motion.div
                className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-10"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
              >
                <p className="text-sm text-primary font-medium">
                  Engenharia óptica + lapidação de alta precisão.
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Button
                  variant="hero"
                  size="lg"
                  className="px-10 py-6 h-auto text-lg"
                  onClick={() => document.getElementById('linhas-vision')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explorar Linhas Vision
                </Button>
              </motion.div>
            </AnimatedGroup>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-card border tech-border rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <img
                    src="/hero-tech.png"
                    alt="Prevent Vision Technology"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>

                {/* Floating tech elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" />
              </div>
            </motion.div>

            {/* Mobile Image (visible only on small screens) */}
            <motion.div
              className="lg:hidden mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="rounded-2xl overflow-hidden border tech-border aspect-video">
                <img
                  src="/hero-tech.png"
                  alt="Prevent Vision Tech"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};