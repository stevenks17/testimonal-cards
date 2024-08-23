import { HydrateClient } from "~/trpc/server";
import UserList from "./_components/userlist";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="3xl:py-24 3xl:px-24 m-4 flex flex-col gap-12 rounded bg-white px-3 py-12 shadow-xl outline outline-1 outline-neutral-200 md:gap-16 md:px-4 md:py-16">
        <header className="flex flex-col gap-5 px-8 text-center">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold text-indigo-700">
              Testimonials
            </p>
            <p className="text-3xl font-semibold text-neutral-900 md:text-5xl">
              Countless users, countless smiles
            </p>
            <div className="text-lg font-normal text-neutral-600 md:text-xl">
              Explore our community&apos;s journey and discover why satisfaction
              defines us.
            </div>
          </div>
        </header>
        <UserList />
      </main>
    </HydrateClient>
  );
}
