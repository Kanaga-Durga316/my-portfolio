import { FC, memo } from 'react';
import { certifications, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Certifications: FC = memo(() => {
  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Section
      sectionId={SectionId.Certifications}
      className="relative py-20 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/images/certifications/header-background.webp"
        alt="Certifications background"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Certifications
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
          {certifications.map((cert) => (
            <button
              key={cert.platform}
              onClick={() => handleClick(cert.certificates[0])}
              className="rounded-full bg-white/10 p-4 backdrop-blur transition hover:scale-110 hover:bg-white/20"
              title={cert.platform}
            >
              <img
                src={cert.logo}
                alt={cert.platform}
                className="h-10 w-10 object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
});

Certifications.displayName = 'Certifications';
export default Certifications;
