"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${value}`);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
      <div className="p-4 shadow-md bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r rounded-md">
        <h1 className="text-2xl font-semibold mb-4 text-gray">
          Enter Your Name
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
            placeholder="Type something..."
          />
          <button
            type="submit"
            className="w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-opacity-75text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200  focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-center mr-2 mb-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
