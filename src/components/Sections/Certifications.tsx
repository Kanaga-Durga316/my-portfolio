import { FC, memo } from 'react';
import Image from 'next/image';

import { certifications, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Certifications: FC = memo(() => {
  const handleClick = (url: string) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Section
      sectionId={SectionId.Certifications}
      className="relative py-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/certifications/header-background.webp"
          alt="Certifications Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Certifications
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
          {certifications.map((cert, index) => (
            <div
              key={cert.platform}
              className="animate-scaleIn"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <button
                onClick={() => handleClick(cert.certificates[0])}
                className="
                  rounded-full
                  p-4
                  bg-white/10
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:-translate-y-2
                  hover:bg-white/20
                "
                title={cert.platform}
              >
                <Image
                  src={cert.logo}
                  alt={cert.platform}
                  width={42}
                  height={42}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

Certifications.displayName = 'Certifications';
export default Certifications;
