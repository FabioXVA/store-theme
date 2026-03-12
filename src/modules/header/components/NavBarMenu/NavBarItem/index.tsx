import type { ReactElement } from "react"
import { Link } from "react-router-dom"

type MenuProps = {
  menuTitle: string
  url: string
}

const NavContainer = (menuProps: MenuProps): ReactElement => {
  return (
    <>
      <li>
        <Link
          className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
          to={menuProps?.url}
        >
          {menuProps?.menuTitle}
        </Link>
      </li>
    </>
  )
}

export default NavContainer
