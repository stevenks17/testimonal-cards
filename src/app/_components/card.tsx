import Image from "next/image";
import type { User } from "./userlist";

interface CardProps {
  user: User;
}

export default function Card({ user }: CardProps) {
  return (
    <div className="flex w-[340px] flex-col gap-4 rounded-lg bg-white p-6 font-sans shadow-md">
      <div className="flex items-center gap-4 self-stretch">
        <Image
          className="h-12 w-12 rounded-full object-cover"
          alt={`${user.userName}'s profile picture`}
          src={user.src ?? "/assets/profile-thumbnail_1.jpg"}
          width={48}
          height={48}
        />
        <div className="flex grow flex-col gap-px">
          <span className="text-lg font-semibold leading-7 text-neutral-900">
            {user.userName}
          </span>
          <span className="text-sm font-normal leading-5 text-neutral-600">
            {user.userHandle}
          </span>
        </div>
      </div>
      <span className="text-base font-normal leading-6 text-neutral-600">
        {user.testimonial}
      </span>
    </div>
  );
}
