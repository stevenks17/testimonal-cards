import Card from "./card";

export interface User {
  name: string;
  username: string;
  image?: string;
  description?: string;
}

export default function UserList() {
  const users: User[] = [
    {
      name: "Sarah Dole",
      username: "sarahdole",
      image: "/profile-thumbnail.png",
      description:
        "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-6">
      {users.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  );
}
