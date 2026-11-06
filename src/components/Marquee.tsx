import React from 'react';
import { MARQUEE_ITEMS } from '../data/content';

const Star: React.FC = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="text-accenttext shrink-0"
  >
    <path
      d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2Z"
      fill="currentColor"
    />
  </svg>
);

const Row: React.FC<{ hidden?: boolean }> = ({ hidden }) => (
  <div aria-hidden={hidden || undefined} className="flex items-center gap-10 pr-10">
    {MARQUEE_ITEMS.map((item) => (
      <div key={item} className="flex items-center gap-10">
        <span className="font-serif italic text-3xl sm:text-5xl text-mut whitespace-nowrap">
          {item}
        </span>
        <Star />
      </div>
    ))}
  </div>
);

export default function Marquee(): React.JSX.Element {
  return (
    <section className="py-14 sm:py-20 border-y border-line overflow-hidden select-none" aria-label="Disciplines">
      <div className="flex w-max animate-marquee">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
