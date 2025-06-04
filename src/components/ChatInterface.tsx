import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import ChatMessage from "@/components/ChatMessage";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const generateResponse = (message: string): string => {
  const responses = [
    "That's interesting! Tell me more.",
    "I understand what you mean.",
    "Thanks for sharing that with me!",
    "How does that make you feel?",
    "I'm here to chat whenever you need.",
    "Let's discuss this further.",
    "I appreciate your perspective on this.",
    "That's a great point!",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!inputValue.trim()) {
      toast({
        title: "Empty message",
        description: "Please enter a message before sending.",
        variant: "destructive",
      });
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="border rounded-lg shadow-sm bg-white dark:bg-gray-800 max-w-2xl mx-auto overflow-hidden">
      <div className="p-4 border-b bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
        <h2 className="font-medium">Chat</h2>
      </div>
      
      <ScrollArea className="h-[400px] p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t dark:border-gray-700 flex gap-2">
        <Input
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1"
        />
        <Button onClick={handleSendMessage}>
          <Send className="h-4 w-4 mr-2" />
          Send
        </Button>
      </div>
    </div>
  );
}