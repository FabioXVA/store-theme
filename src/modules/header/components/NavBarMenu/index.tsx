import type { ReactElement } from "react"

import NavBarItem from "./NavBarItem"
import { menuProps } from "./props"

export const NavBarMenu = (): ReactElement => {
  return (
    <div
      className="hidden m-auto w-full lg:flex lg:w-auto lg:order-1  max-w-336.25 "
      id="mobile-menu-2"
    >
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 p-5  ">
        {menuProps.map((item, idx) => {
          return (
            <li key={idx}>
              <NavBarItem url={item.url} menuTitle={item.menuTitle} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
