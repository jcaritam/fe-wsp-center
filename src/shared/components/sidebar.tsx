import { NavLink } from "react-router-dom";
import { root } from "../constants/routes.constant";

export const Sidebar = () => {
  return (
    <div className="w-[18vw] bg-emerald-500 px-3 py-3 space-y-3">
      <header className="text-center">
        <h1 className="text-white text-2xl">WSP - center</h1>
      </header>

      <nav>
        <ul className="flex flex-col gap-2">
          {
            root.map(({ label, path }, index) => (
              <NavLink
                to={path}
                key={index}
                className="border p-2 rounded-md hover:bg-white text-white hover:text-emerald-600 transition-all duration-75">
                {label}
              </NavLink>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}
