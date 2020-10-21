import { Nav } from "components/Nav";

export function Header({ children }) {
  return (
    <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
      <Nav />

      <main className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="text-center">{children}</div>
      </main>
    </div>
  );
}
