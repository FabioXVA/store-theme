import type { ReactElement } from "react"
type LogoProps = {
  url: string
  imageLink: string
}

const Logo = ({ url, imageLink }: LogoProps): ReactElement => {
  return (
    <a href={url} className="flex items-center">
      <img src={imageLink} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        TechCommerce
      </span>
    </a>
  )
}
export default Logo
