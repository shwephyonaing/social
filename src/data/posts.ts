import { Post } from "@/types/post";
import { userMap } from "./users";

export const posts: Post[] = [
  {
    id: "post-1",
    author: userMap["bessie-cooper"],
    message:
      "In today's fast-paced, digitally driven world, digital marketing is not just a strategy; it's a necessity for businesses of all sizes.",
    postedAt: "7 hours ago",
    likes: 14,
    comments: [
      {
        id: "comment-1",
        author: userMap["daniel-brown"],
        message:
          "Fantastic post! Your content always brings a smile to my face. Keep up the great work! 👏",
        postedAt: "2 hours ago",
      },
      {
        id: "comment-2",
        author: userMap["bessie-cooper"],
        message: "Thank you for sharing your comment!",
        postedAt: "2 hours ago",
      },
      {
        id: "comment-3",
        author: userMap["david-martinez"],
        message:
          "Your positivity is contagious! Thanks for brightening up my feed.",
        postedAt: "2 hours ago",
      },
    ],
  },
  {
    id: "post-2",
    author: userMap["daniel-brown"],
    message:
      "Just wrapped a growth experiment that boosted weekly signups by 12%. Happy to share the playbook if anyone's curious.",
    postedAt: "4 hours ago",
    likes: 21,
    comments: [
      {
        id: "comment-4",
        author: userMap["bessie-cooper"],
        message: "Would love to see the outline—great job Daniel!",
        postedAt: "1 hour ago",
      },
      {
        id: "comment-5",
        author: userMap["robert-fox"],
        message:
          "Congrats! Curious how you balanced paid vs organic in the test.",
        postedAt: "45 minutes ago",
      },
    ],
  },
  {
    id: "post-3",
    author: userMap["robert-fox"],
    message:
      "Shipping a new API client this week. Focused on better DX, improved docs, and strong typed errors. Open for beta testers!",
    postedAt: "9 hours ago",
    likes: 8,
    comments: [
      {
        id: "comment-6",
        author: userMap["andrew-harris"],
        message: "Count me in for the beta—typed errors are a win.",
        postedAt: "1 hour ago",
      },
    ],
  },
];
