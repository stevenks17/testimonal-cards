import Image from "next/image";
import type { User } from "./userlist";

interface CardProps {
  user: User;
}

export default function Card({ user }: CardProps) {
  return (
    <div className="flex w-[340px] flex-col gap-4 rounded-lg bg-white p-6">
      <div className="flex items-center gap-4 self-stretch">
        <Image
          className="h-12 w-12 object-cover"
          alt={`${user.name}'s profile picture`}
          src={user.image ?? "/profile-thumbnail.png"}
          width={48}
          height={48}
        ></Image>
        <div className="flex grow flex-col gap-px">
          <span className="text-justify text-lg font-semibold text-neutral-900">
            {user.name}
          </span>
          <span className="text-sm font-normal text-neutral-600">
            @{user.username}
          </span>
        </div>
      </div>
      <span className="text-base font-normal text-neutral-600">
        {user.description}
      </span>
    </div>
  );
}
