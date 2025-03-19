import ChatbotIcon from "./ChatbotIcon";
import ReactMarkdown from "react-markdown";
export default function ChatMessage({ chat }) {
	const isBot = chat.role === "bot";

	return (
		<div className={`msg ${isBot ? "bot-msg" : "user-msg"} `}>
			{isBot && (
				<div className="chatbot-chat-icon flex items-center">
					<ChatbotIcon />
				</div>
			)}

			<div className="msg-text" data-thinking={chat.text === "Thinking..."}>
				<ReactMarkdown>
					{chat.text !== "Thinking..." && chat.text}
				</ReactMarkdown>
			</div>
		</div>
	);
}
