import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-100 flex h-15 w-full items-center justify-center bg-black/10 backdrop-blur-md">
      <div className="flex w-150 max-w-200 items-center justify-between px-6">
        
        {/* ---------- toggle navbar ----------*/}

        <input type="checkbox" className="peer hidden" id="navbar-toggle" />

        <label
          htmlFor="navbar-toggle"
          className="block h-6 w-6 cursor-pointer fill-white sm:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
          </svg>
        </label>

        {/* ---------- expanded nav bar  ----------*/}
        <nav className="mt-50 p-4 sm:mt-0 w-50 hidden peer-checked:block sm:block peer-checked:bg-black/10 peer-checked:backdrop-blur-md">
          <ul className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-8 gap-x-12 text-sm font-bold text-white uppercase">
            <li>
              <a href="#process">process</a>
            </li>
            <li>
              <a href="#features">features</a>
            </li>
            <li>
              <a href="#pricing">pricing</a>
            </li>
          </ul>
        </nav>

        {/* ----------- LOGO ---------- */}
        <Image
          src={"https://ik.imagekit.io/wtrbwz/Logo.png?updatedAt=1698154686199"}
          alt="site logo"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}
