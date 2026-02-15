import React from 'react';

// Mock for Jest - swiper uses ESM and is not transformed by default
export const Swiper = ({ children }: { children?: React.ReactNode }) => (
  <div data-testid="swiper">{children}</div>
);

export const SwiperSlide = ({ children }: { children?: React.ReactNode }) => (
  <div data-testid="swiper-slide">{children}</div>
);
