'use client';

import React, { ReactNode, useEffect, useRef, useState } from "react";

export interface SimpleScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const SimpleScrollStackItem: React.FC<SimpleScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => (
  <div
    className={`scroll-stack-card w-full max-w-4xl mx-auto h-[500px] bg-main-black2 rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.3)] transition-all duration-500 ${itemClassName}`.trim()}
  >
    <div className="h-full p-8 md:p-12">
      {children}
    </div>
  </div>
);

interface SimpleScrollStackProps {
  className?: string;
  children: ReactNode;
}

const SimpleScrollStack: React.FC<SimpleScrollStackProps> = ({
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = Array.from(
      containerRef.current.querySelectorAll('.scroll-stack-card')
    ) as HTMLElement[];

    if (cards.length === 0) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerTop = containerRef.current.offsetTop;
    const stackTopPosition = window.innerHeight * 0.15; // Stack position from top
    
    cards.forEach((card, index) => {
      const cardTrigger = containerTop + (index * 400); // Trigger point for each card
      const shouldStack = scrollY >= cardTrigger;
      
      if (shouldStack) {
        // Calculate how many cards are already stacked
        let stackedCards = 0;
        for (let i = 0; i < index; i++) {
          const prevTrigger = containerTop + (i * 400);
          if (scrollY >= prevTrigger) stackedCards++;
        }
        
        // Position the card in the stack
        const stackOffset = stackedCards * 15; // Offset each stacked card
        const scale = 1 - (stackedCards * 0.02); // Slightly smaller for cards below
        const rotation = stackedCards * -0.5; // Slight rotation
        
        card.style.position = 'fixed';
        card.style.top = `${stackTopPosition + stackOffset}px`;
        card.style.left = '50%';
        card.style.transform = `translateX(-50%) scale(${scale}) rotate(${rotation}deg)`;
        card.style.zIndex = (1000 - stackedCards).toString();
        card.style.opacity = '1';
      } else {
        // Card is not yet triggered, keep it in document flow
        card.style.position = 'relative';
        card.style.top = 'auto';
        card.style.left = 'auto';
        card.style.transform = 'none';
        card.style.zIndex = '1';
        card.style.opacity = '1';
      }
    });
  }, [scrollY]);

  const childrenArray = React.Children.toArray(children);
  const spacingHeight = childrenArray.length * 450; // Space for triggering each card

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={containerRef}
        className="space-y-8"
        style={{ paddingBottom: `${spacingHeight}px` }}
      >
        {children}
      </div>
    </div>
  );
};

export default SimpleScrollStack;
