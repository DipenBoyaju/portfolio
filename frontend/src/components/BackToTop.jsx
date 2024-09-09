import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Adjust the value as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : 'opacity-0'} fixed bottom-10 md:bottom-20 right-5 bg-[#a5aaf0] border border-[#8b8fcc] text-white rounded-lg cursor-pointer items-center w-10 h-8 md:w-14 md:h-10 flex justify-center rotate-45 dark:bg-[rgba(10,0,0,0.7)] dark:border-zinc-700`}
      onClick={scrollToTop}
    >
      <ArrowUp size={32} strokeWidth={2} className='-rotate-45' />
    </button>
  );
};

export default BackToTopButton;
