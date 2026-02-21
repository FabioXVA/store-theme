import type { JSX } from "react"
import React from "react"

export const Swiper = ({ children }: { children?: React.ReactNode }): JSX.Element => (
  <div data-testid="swiper">{children}</div>
)

export const SwiperSlide = ({
  children,
}: {
  children?: React.ReactNode
}): JSX.Element => <div data-testid="swiper-slide">{children}</div>
