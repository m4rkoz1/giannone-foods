import logoUrl from '@assets/LOGO-GIANNONE-FOODS_1758834355994.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', size = 'lg' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-12',
    md: 'h-16', 
    lg: 'h-24',
    xl: 'h-32'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={logoUrl} 
        alt="Giannone Foods - Sabores Italianos Autênticos" 
        className={`${sizeClasses[size]} w-auto object-contain drop-shadow-lg`}
        data-testid="logo-giannone-foods"
      />
    </div>
  );
}