import { FC, memo, useState } from 'react';
import Image from 'next/image';

import { certifications, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Certifications: FC = memo(() => {
  const [activeCert, setActiveCert] = useState<any>(null);

  return (
    <Section sectionId={SectionId.Certifications}>
      <h2 className="mb-10 text-center text-3xl font-extrabold text-white">
        Certifications
      </h2>

      {/* LOGOS ONLY */}
      <div className="flex flex-wrap justify-center gap-10">
        {certifications.map(cert => (
          <button
            key={cert.platform}
            onClick={() => setActiveCert(cert)}
            className="group transition-transform duration-300 hover:scale-110"
          >
           <Image
             src={cert.logo}
             alt={cert.platform}
             width={100}
             height={100}
             className="rounded-xl object-contain"
           />
          </button>
        ))}
      </div>

      {/* MODAL */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-md rounded-xl bg-neutral-900 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">
                {activeCert.platform} Certificates
              </h3>
              <button
                onClick={() => setActiveCert(null)}
                className="text-xl text-white hover:text-red-400"
              >
                ✕
              </button>
            </div>

            <ul className="space-y-3">
              {activeCert.certificates.map((cert: any, index: number) => (
                <li key={index}>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg bg-neutral-800 px-4 py-2 font-semibold text-blue-400 hover:bg-neutral-700"
                  >
                    📄 {cert.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Section>
  );
});

Certifications.displayName = 'Certifications';
export default Certifications;
