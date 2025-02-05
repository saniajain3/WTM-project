import ChatbotIcon from "./ChatbotIcon";
import { RiArrowDropDownLine } from "react-icons/ri";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";
import { useEffect, useState, useRef } from "react";
import { IoChatboxOutline } from "react-icons/io5";

export default function Chatbot() {
	const [chatHistory, setChatHistory] = useState([]);
	const [showChatbot, setShowChatbot] = useState(false);
	const chatBodyRef = useRef();

	async function generateBotResponse(history, attempt = 1) {
		const MAX_ATTEMPTS = 3; //  number of retry attempts

		try {
			const apiKey = "AIzaSyBGa03rLGbh3GYOSDEpXXlWlioRjFcb1MI";
			const systemMessage = {
				role: "model",

				parts: [
					{
						text: `
						You are HerSpace, a supportive and knowledgeable AI assistant designed to empower women in health, career, and lifestyle. 
						
						Your primary focus areas are:
						- Women's health & wellness (period tracking, mental health, self-care)
						- Career growth & empowerment (resume tips, work-life balance, entrepreneurship)
						- Lifestyle advice (relationships, confidence building, personal development)
						
						If a user asks about topics outside these areas (e.g., astrophysics, politics, sports, or technology), gently redirect them with a friendly message like:  
						"I'm here to help with women's health, career, and lifestyle! Let me know how I can support you in those areas."  
						
						Always keep responses engaging, empathetic, and relevant to women's needs.  
						`,
					},
				],
			};
			// const contents = history
			// 	.filter((msg) => msg.text.trim() !== "")
			// 	.map((msg) => ({
			// 		role: msg.role === "bot" ? "model" : msg.role,
			// 		parts: [{ text: msg.text }],
			// 	}));
			const contents = [
				systemMessage,
				...history
					.filter((msg) => msg.text.trim() !== "")
					.map((msg) => ({
						role: msg.role === "bot" ? "model" : msg.role,
						parts: [{ text: msg.text }],
					})),
			];
			const response = await fetch(
				`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ contents }),
				}
			);

			const responseText = await response.text();
			console.log("API Raw Response:", responseText);

			const data = JSON.parse(responseText);
			console.log(data);
			const botMessage =
				data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
			if (!botMessage) {
				throw new Error("Empty or invalid response from API");
			}

			setChatHistory((prevHistory) =>
				prevHistory.map((msg) =>
					msg.text === "Thinking..." ? { role: "bot", text: botMessage } : msg
				)
			);
		} catch (error) {
			if (attempt < MAX_ATTEMPTS) {
				console.warn(
					`Attempt ${attempt} failed. Retrying in ${attempt * 1000}ms...`
				);
				setTimeout(
					() => generateBotResponse(history, attempt + 1),
					attempt * 1000
				);
			} else {
				console.error("Error in bot response:", error);
				setChatHistory((prevHistory) => [
					...prevHistory,
					{
						role: "bot",
						text: "Error occurred while processing the response.",
					},
				]);
			}
		}
	}

	useEffect(() => {
		chatBodyRef.current?.scrollTo({
			top: chatBodyRef.current.scrollHeight,
			behavior: "smooth",
		});
	}, [chatHistory]);

	return (
		<div
			className={`chatbot ${
				showChatbot ? "show-chatbot" : ""
			} min-h-screen flex justify-center items-center font-inter px-4 sm:px-18 md:px-16 xl:px-40 2xl:px-64`}
		>
			<button
				onClick={() => setShowChatbot((prev) => !prev)}
				id="chatbot-toggler"
			>
				{showChatbot ? (
					<span>&#10005;</span>
				) : (
					<span>
						<IoChatboxOutline />
					</span>
				)}
			</button>
			<div className="chatbot-popup w-4/5">
				<div className="flex space-y-2 justify-between  rounded-tl-lg rounded-tr-lg py-5 px-8 bg-gradient-to-r from-[#fd7da7] via-[#ff9eab] to-[#fcbebb]">
					<div className="chat-header flex items-center">
						<div className="chatbot-icon">
							<ChatbotIcon />
						</div>
						<h2 className="text-xl pl-2 text-white chatbot-text">Chatbot</h2>
					</div>
					<div
						className="arrow-dropdown"
						onClick={() => setShowChatbot((prev) => !prev)}
					>
						<RiArrowDropDownLine color="white" className="icon" />
					</div>
				</div>

				{/* Chatbot body */}
				<div ref={chatBodyRef} className="chat-body  bg-white">
					<div className="msg bot-msg flex gap-5 items-center">
						<div className="chatbot-chat-icon">
							<ChatbotIcon />
						</div>
						<p className="msg-text">
							Hi there👋 <br /> Welcome to HerSpace! How can I empower you
							today? Whether you need help with your period tracker, career
							tips, or finding inspiring blogs, I'm here for you.
						</p>
					</div>

					{chatHistory.map((chat, index) => (
						<ChatMessage key={index} chat={chat} />
					))}
				</div>

				{/* Chatbot footer */}
				<div className="chat-footer">
					<ChatForm
						chatHistory={chatHistory}
						setChatHistory={setChatHistory}
						generateBotResponse={generateBotResponse}
					/>
				</div>
			</div>
		</div>
	);
}
