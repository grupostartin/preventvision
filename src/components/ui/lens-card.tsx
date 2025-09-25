import { ReactNode } from "react";

interface LensCardProps {
  title: string;
  features: string[];
  icon?: ReactNode;
  highlight?: boolean;
}

export const LensCard = ({ title, features, icon, highlight }: LensCardProps) => {
  return (
    <div className={`
      bg-card/50 border tech-border rounded-2xl p-6 md:p-8 backdrop-blur-sm 
      transition-all duration-300 hover:scale-105 hover:shadow-tech
      h-full flex flex-col
      ${highlight ? 'ring-2 ring-primary/50 bg-primary/5' : ''}
    `}>
      {icon && (
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-gradient flex-shrink-0">
        {title}
      </h3>
      
      <div className="space-y-3 md:space-y-4 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0 animate-pulse-glow" />
            <p className="text-foreground/90 leading-relaxed text-sm md:text-base">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};