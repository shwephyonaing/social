import { User } from "@/types/user";

export const users: User[] = [
  {
  id: "robert-fox",
  name: "Robert Fox",
  title: "Software Engineer",
  handle: "rrobert",
  avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
  cover:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80",
},
{
  id: "bessie-cooper",
  name: "Bessie Cooper",
  title: "Digital Marketer",
  avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
  cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  badge: "Author",
},
  {
    id: "daniel-brown",
    name: "Daniel Brown",
    title: "Digital Marketer",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "david-martinez",
    name: "David Martinez",
    title: "Back-end Developer",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "olivia-anderson",
    name: "Olivia Anderson",
    title: "Financial Analyst",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "thomas-baker",
    name: "Thomas Baker",
    title: "Project Manager",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "lily-lee",
    name: "Lily Lee",
    title: "Graphic Designer",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "andrew-harris",
    name: "Andrew Harris",
    title: "Data Scientist",
    avatar:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=200&q=80",
  },
];

export const userMap: Record<string, User> = Object.fromEntries(
  users.map((user) => [user.id, user]),
) as Record<string, User>;

export const currentUser = userMap["robert-fox"];

export const suggestedFriends: User[] = [
  userMap["olivia-anderson"],
  userMap["thomas-baker"],
  userMap["lily-lee"],
  userMap["andrew-harris"],
];
