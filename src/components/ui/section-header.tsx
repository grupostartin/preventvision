interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export const SectionHeader = ({ title, subtitle, description }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-4xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl mb-6 text-primary font-medium">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};