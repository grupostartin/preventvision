import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import preventLogo from "@/assets/prevent-logo.png";

export const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000); // 3 seconds splash

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 z-0">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 0.15 }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"
                        />
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.1 }}
                            transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent rounded-full blur-[80px]"
                        />
                    </div>

                    {/* Logo & Text Container */}
                    <div className="relative z-10 flex flex-col items-center text-center px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.2
                            }}
                            className="mb-8"
                        >
                            <img
                                src={preventLogo}
                                alt="Prevent Vision"
                                className="h-24 md:h-32 w-auto filter drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="max-w-md"
                        >
                            <motion.h2
                                className="text-2xl md:text-3xl font-bold text-gradient mb-4 tracking-tight"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                A Revolução da Visão
                            </motion.h2>
                            <motion.p
                                className="text-muted-foreground text-lg font-light leading-relaxed tracking-wide"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                Precisão em cada detalhe, clareza em cada olhar.
                                <br />
                                <span className="text-primary/80 font-medium">Bem-vindo à evolução multifocal.</span>
                            </motion.p>
                        </motion.div>

                        {/* Loading Indicator */}
                        <motion.div
                            className="mt-12 w-48 h-[2px] bg-primary/10 rounded-full overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        >
                            <motion.div
                                className="h-full bg-primary"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </div>

                    {/* Decorative lines */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
