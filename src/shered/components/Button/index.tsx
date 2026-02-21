interface Button {
  link?: string
  submit?: boolean
  title: string
  icon?: React.ReactNode
  target?: string
  buttonClass?: string
  onClick?: () => void
  type?: "submit" | "link" | "button"
}

export const Button = ({
  link,
  title,
  icon,
  target,
  type,
  onClick,
}: Button): JSX.Element => {
  const buttonClass =
    "bg-yellow-400 text-black mt-4 sm:mt-0  hover:bg-yellow-600 hover:text-white font-bold  rounded-lg text-sm px-5 py-2.5 flex items-center justify-center"

  return !type ? (
    <a href={link} title={title} className={buttonClass} role="button" target={target}>
      {icon}
      {title}
    </a>
  ) : (
    <button
      data-drawer-target="drawer-example"
      data-drawer-show="drawer-example"
      className={buttonClass}
      type={type == "submit" ? "submit" : "button"}
      onClick={onClick}
    >
      {icon}
      {title}
    </button>
  )
}
