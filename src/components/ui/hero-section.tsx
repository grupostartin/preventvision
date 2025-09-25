import { Button } from "./button";
import preventLogo from "@/assets/prevent-logo.png";
import { useParallax } from "@/hooks/use-scroll-animation";
import { AnimatedGroup } from "./animated-group";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export const HeroSection = () => {
  const parallaxOffset1 = useParallax(0.3);
  const parallaxOffset2 = useParallax(0.5);
  const parallaxOffset3 = useParallax(0.7);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setShowControls(true);
      video.play();
    } else {
      video.pause();
    }
  };

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
              Prevent Vision
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-xl md:text-2xl mb-4 text-foreground/90 font-light"
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
              Tecnologia em Visão
            </motion.p>
            
            <motion.p 
              className="text-sm sm:text-lg md:text-xl mb-8 sm:mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: 'spring',
                    bounce: 0.2,
                    duration: 1,
                    delay: 0.4,
                  }
                },
              }}
            >
              Inovação em lentes oftálmicas com tecnologia de ponta para uma visão perfeita
            </motion.p>
            
            {/* Video placeholder */}
            <motion.div 
              className="bg-card/50 border tech-border rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 backdrop-blur-sm"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    type: 'spring',
                    bounce: 0.3,
                    duration: 1.2,
                    delay: 0.6,
                  }
                },
              }}
            >
              <div className="aspect-video rounded-xl overflow-hidden bg-black relative group">
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="/video.mp4"
                  controls={showControls}
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Botão Play central */}
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                    aria-label="Reproduzir vídeo"
                  >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                )}
              </div>
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
                    delay: 0.8,
                  }
                },
              }}
            >
              <Button 
                variant="hero" 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Conheça Nossas Lentes
              </Button>
            </motion.div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
};