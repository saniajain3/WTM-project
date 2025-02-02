import { MdArrowUpward } from "react-icons/md";
import { useEffect, useState } from "react";

export default function ChatForm({
	chatHistory,
	setChatHistory,
	generateBotResponse,
}) {
	const [newMessage, setNewMessage] = useState("");
	const [botMessage, setBotMessage] = useState("");

	const [isTyping, setIsTyping] = useState(false);

	useEffect(() => {
		if (isTyping) {
			setBotMessage("Typing...");

			const timeoutID = setTimeout(() => {
				setIsTyping(false);
			}, 3000);

			return () => clearTimeout(timeoutID);
		}
	}, [isTyping]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const userMessage = newMessage.trim();
		if (userMessage === "") return;

		setChatHistory((prevHistory) => [
			...prevHistory,
			{ role: "user", text: userMessage },
		]);

		setNewMessage("");

		// thinking... before bot's response
		setIsTyping(true);
		setChatHistory((prevHistory) => [
			...prevHistory,
			{ role: "bot", text: "Thinking..." },
		]);

		try {
			// ✅ Wait for bot response
			await generateBotResponse([
				...chatHistory,
				{ role: "user", text: userMessage },
			]);
		} catch (error) {
			console.error("Error in bot response:", error);
			setChatHistory((prevHistory) => [
				...prevHistory,
				{ role: "bot", text: "Error occurred while processing the response." },
			]);
		} finally {
			setIsTyping(false); //thinking.. would stop after bot's response
		}
	};

	return (
		<form className="chat-form" onSubmit={handleSubmit}>
			<input
				type="text"
				value={newMessage}
				className="msg-input"
				onChange={(e) => setNewMessage(e.target.value)}
				placeholder="Message..."
			/>
			<button type="submit" className="upward-arrow">
				<MdArrowUpward />
			</button>
		</form>
	);
}
