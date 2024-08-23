import Card from "./card";

export interface User {
  src: string;
  userHandle: string;
  userName: string;
  testimonial?: string;
  alt?: string;
}

export default function UserList() {
  const users: User[] = [
    {
      userName: "Sarah Dole",
      userHandle: "@sarahdole",
      testimonial:
        "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
      src: "/assets/profile-thumbnail.jpg",
      alt: "",
    },
    {
      userName: "John Appleseed",
      userHandle: "@johnaseed",
      testimonial:
        "As an artist, finding inspiration is crucial. This platform has become my go-to source for unique abstract images that ignite my creativity like never before.",
      src: "/assets/profile-thumbnail_1.jpg",
      alt: "",
    },
    {
      userName: "Jean Gray",
      userHandle: "@jeniic",
      testimonial:
        "I never thought I'd find such stunning abstract images for free! This platform has exceeded my expectations in every way.",
      src: "/assets/profile-thumbnail_2.jpg",
      alt: "",
    },
    {
      userName: "Jake Johnson",
      userHandle: "@jakejohnshon",
      testimonial:
        "From corporate presentations to personal projects, the abstract images on this platform have added a touch of elegance and sophistication to everything I create.",
      src: "/assets/profile-thumbnail_3.jpg",
      alt: "",
    },
    {
      userName: "Igor Stravinsky",
      userHandle: "@igorstrav",
      testimonial:
        "The subscription plans are worth every penny. Having unlimited access to premium abstract images has transformed my design workflow and elevated the quality of my work",
      src: "/assets/profile-thumbnail_4.jpg",
      alt: "",
    },
    {
      userName: "Declan Rice",
      userHandle: "@drice",
      testimonial:
        "I'm amazed by the attention to detail in every image on this platform. It's clear that a lot of thought and creativity goes into curating the collection.",
      src: "/assets/profile-thumbnail_5.jpg",
      alt: "",
    },
    {
      userName: "Marcus Thompson",
      userHandle: "@mthompson",
      testimonial:
        "Using abstract images from this platform has helped me convey complex concepts in a visually engaging way. My clients are always impressed!",
      src: "/assets/profile-thumbnail_6.jpg",
      alt: "",
    },
    {
      userName: "Oliver Neverloved",
      userHandle: "@olivernever",
      testimonial:
        "I appreciate how user-friendly the platform is. Browsing, downloading, and managing my image library couldn't be easier.",
      src: "/assets/profile-thumbnail_7.jpg",
      alt: "",
    },
    {
      userName: "Mark Dennis",
      userHandle: "@marked",
      testimonial:
        "The customer support team went above and beyond to help me with a subscription issue. Their dedication to customer satisfaction is truly commendable",
      src: "/assets/profile-thumbnail_8.jpg",
      alt: "",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="grid gap-6 shadow-lg sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {users.map((user, index) => (
          <Card key={index} user={user} />
        ))}
      </div>
    </div>
  );
}
