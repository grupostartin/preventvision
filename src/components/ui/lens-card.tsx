import { ReactNode } from "react";

interface LensCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  features: string[];
  icon?: ReactNode;
  highlight?: boolean;
  imageUrl?: string;
}

export const LensCard = ({ title, subtitle, description, features, icon, highlight, imageUrl }: LensCardProps) => {
  return (
    <div className={`
      bg-card/50 border tech-border rounded-2xl p-6 md:p-8 backdrop-blur-sm 
      transition-all duration-300 hover:scale-[1.02] hover:shadow-tech
      h-full flex flex-col
      ${highlight ? 'ring-2 ring-primary bg-primary/5' : ''}
    `}>
      {icon && (
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
      )}

      <div className="text-center mb-6 flex-shrink-0">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-gradient">
          {title}
        </h3>
        {subtitle && (
          <p className="text-primary font-medium text-sm md:text-base mb-3">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed italic mb-4">
            {description}
          </p>
        )}
      </div>

      {imageUrl && (
        <div className="mb-6 rounded-xl overflow-hidden border tech-border bg-muted/20">
          <img
            src={imageUrl}
            alt={`${title} field of vision`}
            className="w-full aspect-video object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}

      <div className="space-y-3 md:space-y-4 flex-grow border-t border-muted/20 pt-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0 animate-pulse-glow" />
            <p className="text-foreground/90 leading-relaxed text-xs md:text-sm">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};