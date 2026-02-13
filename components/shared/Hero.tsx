'use client';

import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface Program {
  title: string;
  description: string;
  backgroundImage: string;
}

const programs: Program[] = [
  {
    title: 'Business Management Executive Program',
    description: 'A comprehensive program designed for mid-to-senior level Business Executives seeking to accelerate their business expertise.',
    backgroundImage: 'https://res.cloudinary.com/dnu6az3um/image/upload/v1754573010/SKS06305_wyirwf.jpg'
  },
  {
    title: 'Investment Analysis Program',
    description: 'Master financial modeling, valuation techniques, and portfolio optimization used by top investment banks & private equity firms.',
    backgroundImage: 'https://res.cloudinary.com/dnu6az3um/image/upload/v1754573027/SKS06470_cawpoc.jpg'
  },
  {
    title: 'Certified Executive Project Management Program',
    description: 'Transform your potentials into proven Project Leadership with globally-recognized frameworks.',
    backgroundImage: 'https://res.cloudinary.com/dnu6az3um/image/upload/v1754573023/SKS06425_kg7nrs.jpg'
  },
  {
    title: 'Human Resource Management Program',
    description: 'Develop strategic HR leaders who sit at the decision-making table and drive organizational culture, performance, and succession.',
    backgroundImage: 'https://res.cloudinary.com/dnu6az3um/image/upload/v1754573003/SKS06235_gej9vf.jpg'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 5000; // 5 seconds per slide
  const PROGRESS_UPDATE_INTERVAL = 50; // Update progress every 50ms

  const startProgress = () => {
    setProgress(0);
    
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const increment = (PROGRESS_UPDATE_INTERVAL / SLIDE_DURATION) * 100;
        const newProgress = prev + increment;
        
        if (newProgress >= 100) {
          return 100;
        }
        return newProgress;
      });
    }, PROGRESS_UPDATE_INTERVAL);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % programs.length);
    startProgress();
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
    startProgress();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startProgress();
  };

  useEffect(() => {
    startProgress();

    intervalRef.current = setInterval(() => {
      goToNextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      goToNextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentSlide]);

  const currentProgram = programs[currentSlide];

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${program.backgroundImage})`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-32">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-left max-w-4xl">
            <div className="overflow-hidden mb-8">
              <h1 
                key={`title-${currentSlide}`}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-slideUp"
              >
                Solutions engineered
                <br />
                with <span className="text-yellow-400">{currentProgram.title.toLowerCase().includes('business') ? 'people at heart' : 
                      currentProgram.title.toLowerCase().includes('investment') ? 'financial mastery' :
                      currentProgram.title.toLowerCase().includes('project') ? 'project leadership' :
                      'strategic excellence'}</span>
              </h1>
            </div>
            
            <div className="overflow-hidden mb-12">
              <p 
                key={`desc-${currentSlide}`}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl animate-slideUp animation-delay-200"
              >
                {currentProgram.description}
              </p>
            </div>

            <div className="overflow-hidden">
              <button 
                className="group inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-slate-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:gap-5 animate-slideUp animation-delay-400"
              >
                Find Out More
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Navigation Controls (Responsive) */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 flex items-center gap-3 md:gap-4">
        {/* Previous Button */}
        <button
          onClick={goToPrevSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-700/50 hover:bg-slate-600/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNextSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-700/50 hover:bg-slate-600/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-1.5 md:gap-2 bg-slate-700/30 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2">
          {programs.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-6 md:w-8 h-2.5 md:h-3 bg-white' 
                  : 'w-2.5 md:w-3 h-2.5 md:h-3 bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar (Bottom of Screen) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-slate-800/50">
        <div 
          className="h-full bg-yellow-400 transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}