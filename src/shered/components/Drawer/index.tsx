import type { JSX } from "react"

interface Props {
  children: React.ReactNode
  id: string
}

export const Drawer = ({ id, children }: Props): JSX.Element => {
  return (
    <div
      id={`drawer-${id}`}
      className="bg-white fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform  bg-neutral-primary-soft w-96 border-e border-default"
      tabIndex={-1}
      aria-labelledby="drawer-label"
    >
      <div className="pb-4 mb-5 flex items-center">
        <button
          type="button"
          data-drawer-hide="drawer-example"
          aria-controls="drawer-example"
          className="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="flex flex-col gap-[16px]">{children}</div>
      </div>
    </div>
  )
}
