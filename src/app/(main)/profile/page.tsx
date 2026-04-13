"use client";

import PostCard from "@/components/home/PostCard";
import SuggestedFriends from "@/components/home/SuggestedFriends";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import { posts } from "@/data/posts";
import { currentUser } from "@/data/users";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const myPosts = posts.filter((p) => p.author.id === currentUser.id);
const savedPosts = posts.filter((p) => p.author.id !== currentUser.id);

type ProfileTab = "posts" | "saved" | "settings";
type SettingsSection = "general" | "account" | "logout";

function ProfileSettingsPanel() {
  const [activeSection, setActiveSection] = useState<SettingsSection>("general");

  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-lg font-semibold text-slate-900">Settings</h2>
      </div>
      <div className="grid md:grid-cols-[190px_1fr]">
        <div className="border-r border-slate-200 bg-slate-50/60">
          <button
            onClick={() => setActiveSection("general")}
            className={cn(
              "block w-full border-b border-slate-200 px-6 py-3 text-left text-sm transition",
              activeSection === "general"
                ? "bg-slate-100 font-medium text-slate-900"
                : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900",
            )}
          >
            General
          </button>
          <button
            onClick={() => setActiveSection("account")}
            className={cn(
              "block w-full border-b border-slate-200 px-6 py-3 text-left text-sm transition",
              activeSection === "account"
                ? "bg-slate-100 font-medium text-slate-900"
                : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900",
            )}
          >
            Account
          </button>
          <button
            onClick={() => setActiveSection("logout")}
            className={cn(
              "block w-full px-6 py-3 text-left text-sm transition",
              activeSection === "logout"
                ? "bg-slate-100 font-medium text-slate-900"
                : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900",
            )}
          >
            Logout
          </button>
        </div>
        <div className="p-6">
          {activeSection === "general" ? (
            <div className="max-w-sm space-y-5">
              <button className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-dashed border-slate-300 bg-white text-sm text-slate-600 hover:border-slate-400 hover:text-slate-900">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v12" />
                  <path d="m7 8 5-5 5 5" />
                  <path d="M5 21h14" />
                </svg>
                <span>Choose an image for avatar</span>
              </button>
              <Input defaultValue={currentUser.name} placeholder="Full name" />
              <Input
                defaultValue={currentUser.handle ? `@${currentUser.handle}` : ""}
                placeholder="Username"
              />
              <Textarea
                rows={5}
                placeholder="Bio"
                defaultValue="Software engineer focused on building reliable products and helping others grow."
              />
              <Button className="rounded-xl bg-slate-900 px-5 hover:bg-slate-800">
                Save Changes
              </Button>
            </div>
          ) : null}

          {activeSection === "account" ? (
            <div className="max-w-xl space-y-5">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  Delete Account
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600">
                  This action is irreversible and will permanently delete all your
                  data associated with the account.
                </p>
              </div>
              <Button
                variant="ghost"
                className="rounded-xl border border-red-400 px-5 text-red-500 hover:border-red-500 hover:bg-red-50 hover:text-red-600"
              >
                Delete My Account
              </Button>
            </div>
          ) : null}

          {activeSection === "logout" ? (
            <div className="max-w-xl space-y-5">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">Logout</h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600">
                  You can sign out of your current session here. You will need to
                  log in again to access your account and activity.
                </p>
              </div>
              <Button className="rounded-xl bg-slate-900 px-5 hover:bg-slate-800">
                Logout
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("posts");

  const visiblePosts = activeTab === "saved" ? savedPosts : myPosts;

  return (
    <div className="flex h-full min-h-0 flex-col gap-5 overflow-hidden">
      <Card className="shrink-0 p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image
                src={currentUser.avatar}
                alt={currentUser.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-900">
                {currentUser.name}
              </div>
              <div className="text-sm text-slate-500 flex items-center gap-2">
                <span>{currentUser.title}</span>
                {currentUser.handle && (
                  <>
                    <span className="text-slate-300">/</span>
                    <span>@{currentUser.handle}</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-semibold text-slate-900">12</div>
              <div className="text-xs text-slate-500">Posts</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-900">207</div>
              <div className="text-xs text-slate-500">Followers</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-900">64</div>
              <div className="text-xs text-slate-500">Following</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-6 text-sm font-semibold text-slate-600">
          <button
            onClick={() => setActiveTab("posts")}
            className={cn(
              "border-b-2 pb-2 transition",
              activeTab === "posts"
                ? "border-blue-500 text-slate-900"
                : "border-transparent hover:text-slate-900",
            )}
          >
            My Posts
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={cn(
              "border-b-2 pb-2 transition",
              activeTab === "saved"
                ? "border-blue-500 text-slate-900"
                : "border-transparent hover:text-slate-900",
            )}
          >
            Saved Posts
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={cn(
              "border-b-2 pb-2 transition",
              activeTab === "settings"
                ? "border-blue-500 text-slate-900"
                : "border-transparent hover:text-slate-900",
            )}
          >
            Settings
          </button>
        </div>
      </Card>

      {activeTab === "settings" ? (
        <div className="min-h-0 flex-1 overflow-y-auto pr-2 scrollbar-hide">
          <ProfileSettingsPanel />
        </div>
      ) : (
        <div className="flex min-h-0 flex-1 gap-5 overflow-hidden">
          <div className="min-h-0 flex-1 overflow-y-auto pr-2 scrollbar-hide">
            <div className="space-y-4">
              {visiblePosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          <div className="hidden w-[320px] shrink-0 self-start xl:block">
            <SuggestedFriends />
          </div>
        </div>
      )}
    </div>
  );
}
