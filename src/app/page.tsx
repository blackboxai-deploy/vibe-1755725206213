"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <Button 
          onClick={handleClick}
          className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-medium"
        >
          Click Me
        </Button>
      </div>
    </main>
  );
}