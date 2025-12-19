import {FC, memo} from 'react';
import Image from 'next/image';

import {certifications, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Certifications: FC = memo(() => {
  return (
    <Section sectionId={SectionId.Certifications} className="bg-neutral-900">
      <h2 className="mb-8 text-center text-2xl font-bold text-white">
        Certifications
      </h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {certifications.map(cert => (
          <a
            key={cert.name}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-neutral-800 p-6 transition hover:scale-105"
          >
            <Image
              src={cert.logo}
              alt={cert.name}
              width={120}
              height={120}
            />
          </a>
        ))}
      </div>
    </Section>
  );
});

Certifications.displayName = 'Certifications';
export default Certifications;
