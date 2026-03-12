import type { ReactElement } from "react"

import Logo from "./Logo"
import NavActions from "./NavActions"
import { NavBarMenu } from "./NavBarMenu"

export const Header = (): ReactElement => {
  const propsLogo = {
    url: "https://flowbite.com",
    imageLink: "https://flowbite.com/docs/images/logo.svg",
  }

  return (
    <header className="m-auto bg-slate-900">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Logo url={propsLogo.url} imageLink={propsLogo.imageLink} />
          <NavActions />
        </div>
        <NavBarMenu />
      </nav>
    </header>
  )
}
