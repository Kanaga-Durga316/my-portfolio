import { FC, memo } from 'react';
import Image from 'next/image';

import { certifications, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Certifications: FC = memo(() => {
  const handleClick = (url: string) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
    <Section
      sectionId={SectionId.Certifications}
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage: "url('/images/certifications/certifications-bg.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Certifications
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
          {certifications.map((cert, index) => (
            <div
              key={cert.platform}
              className="group animate-scaleIn"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Clickable animated logo */}
              <div
                onClick={() => handleClick(cert.certificates[0])}
                className="
                  cursor-pointer
                  rounded-full
                  p-4
                  bg-white/10
                  backdrop-blur
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:-translate-y-2
                  group-hover:bg-white/20
                  group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]
                "
              >
                <Image
                  src={cert.logo}
                  alt={cert.platform}
                  width={42}
                  height={42}
                  className="mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

Certifications.displayName = 'Certifications';
export default Certifications;
