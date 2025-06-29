import React from 'react';
import { MessageCircle } from 'lucide-react';

interface CallToActionButtonProps {
  isLarge?: boolean;
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({ isLarge = false }) => {
  const handleClick = () => {
    window.open('https://wa.me/123456789?text=Hola,%20me%20interesa%20saber%20más%20sobre%20el%20programa%20de%20epigenética', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`
        flex items-center justify-center w-full 
        bg-primary-500 hover:bg-primary-600 
        text-white font-medium rounded-lg 
        transform hover:scale-105 transition-all duration-300
        focus:outline-none focus:ring-4 focus:ring-primary-300
        shadow-lg
        ${isLarge ? 'py-4 px-8 text-xl' : 'py-3 px-6 text-lg'}
      `}
    >
      <MessageCircle className="mr-2" size={isLarge ? 24 : 20} />
      Únete al grupo de WhatsApp y agenda tu reunión gratuita
    </button>
  );
};

export default CallToActionButton;