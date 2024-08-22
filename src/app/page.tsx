import { HydrateClient } from "~/trpc/server";
import UserList from "./_components/userlist";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-gray-50 to-[#d2d6db] py-[200px]">
        <UserList />
      </main>
    </HydrateClient>
  );
}
