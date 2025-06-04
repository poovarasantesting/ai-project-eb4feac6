import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import ChatInterface from "@/components/ChatInterface";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Toaster />
      <main className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Simple Chat
        </h1>
        <ChatInterface />
      </main>
    </div>
  );
}

export default App;