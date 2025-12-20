import {FC, memo, useState} from 'react';
import Image from 'next/image';

import {certifications, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Certifications: FC = memo(() => {
  const [activeCert, setActiveCert] = useState<any | null>(null);

  return (
    <Section sectionId={SectionId.Certifications}>
      <h2 className="mb-8 text-center text-2xl font-bold">
        Certifications
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {certifications.map((cert, index) => (
          <div
            key={index}
            onClick={() => setActiveCert(cert)}
            className="group cursor-pointer rounded-xl bg-neutral-800 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-neutral-700 hover:shadow-xl"
          >
            <Image
              src={cert.logo}
              alt={cert.platform}
              width={100}
              height={100}
              className="mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
            />

            <h3 className="font-semibold">
              {cert.platform}
            </h3>

            <p className="mt-2 text-xs text-neutral-400">
              Click to view certificates
            </p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-md rounded-xl bg-neutral-900 p-6">
            <h3 className="mb-4 text-center text-xl font-bold">
              {activeCert.platform} Certificates
            </h3>

            <ul className="space-y-3">
              {activeCert.certificates.map((item: any, i: number) => (
                <li key={i}>
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg bg-neutral-800 px-4 py-2 text-sm transition hover:bg-neutral-700 hover:text-white"
                  >
                    📄 {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setActiveCert(null)}
              className="mt-6 w-full rounded-lg bg-red-600 py-2 text-sm font-semibold transition hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Section>
  );
});

Certifications.displayName = 'Certifications';
export default Certifications;
