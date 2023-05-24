"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function SearchBox() {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch("");
  };
  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-cent
    px-5"
    >
      <input
        value={search}
        onChange={handleSearch}
        type="text"
        placeholder="Search keywords ..."
        className="w-full  h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent
         flex-1"
      />
      <button
        disabled={!search}
        className="text-amber-600 disabled:text-gray-400"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
