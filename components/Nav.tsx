export function Nav() {
  return (
    <div className="max-w-screen-xl px-4 mx-auto sm:px-6">
      <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a className="font-bold text-indigo-500" href="/" aria-label="Home">
              Home
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
