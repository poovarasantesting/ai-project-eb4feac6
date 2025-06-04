import { formatDistanceToNow } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === "user";
  
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`flex gap-3 max-w-[80%] ${isUser ? "flex-row-reverse" : ""}`}>
        <Avatar className="h-8 w-8">
          {!isUser && <AvatarImage src="/bot-avatar.png" alt="Bot" />}
          <AvatarFallback className={isUser ? "bg-blue-500" : "bg-gray-500"}>
            {isUser ? "U" : "B"}
          </AvatarFallback>
        </Avatar>
        
        <div>
          <div 
            className={`rounded-lg p-3 text-sm ${
              isUser 
                ? "bg-blue-500 text-white" 
                : "bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
            }`}
          >
            {message.text}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {formatDistanceToNow(message.timestamp, { addSuffix: true })}
          </p>
        </div>
      </div>
    </div>
  );
}