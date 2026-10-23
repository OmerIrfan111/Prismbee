import { useEffect, useId, useState } from 'react';

/**
 * Accessible FAQ accordion.
 *
 * Renders question/answer pairs as an accordion built on real <button>
 * elements with aria-expanded / aria-controls, and injects matching
 * FAQPage JSON-LD structured data into the document head so search
 * engines and AI answer engines can quote the answers.
 *
 * Props:
 *  - faqs: [{ question, answer }]
 *  - heading: optional section heading
 *  - dark: render on a dark (#064E3B) background
 */
export default function FAQ({ faqs, heading = 'Frequently Asked Questions', dark = false }) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId().replace(/[^a-zA-Z0-9]/g, '');

  useEffect(() => {
    if (!faqs || faqs.length === 0) return undefined;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-faq-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [faqs]);

  if (!faqs || faqs.length === 0) return null;

  const headingColor = dark ? 'text-white' : 'text-[#064E3B]';
  const itemBorder = dark ? 'border-white/15' : 'border-[#064E3B]/12';
  const answerColor = dark ? 'text-white/75' : 'text-[#064E3B]/75';
  const iconColor = dark ? 'text-[#A7F3D0]' : 'text-[#10B981]';

  return (
    <section aria-label={heading} className="w-full">
      <h2
        className={`${headingColor} font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05] mb-10`}
      >
        {heading}
      </h2>

      <div className={`border-t ${itemBorder}`}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const buttonId = `${baseId}-button-${index}`;
          const panelId = `${baseId}-panel-${index}`;

          return (
            <div key={index} className={`border-b ${itemBorder}`}>
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`w-full flex items-center justify-between gap-6 text-left py-6 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#10B981] focus-visible:outline-offset-4`}
                >
                  <span
                    className={`${headingColor} font-bold text-lg sm:text-xl tracking-tight leading-snug`}
                  >
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`${iconColor} shrink-0 font-extrabold text-2xl leading-none transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
              >
                <p
                  className={`${answerColor} font-medium text-base sm:text-lg leading-relaxed tracking-tight pb-7 max-w-3xl`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
