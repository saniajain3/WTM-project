try {
	const userMessage = history.at(-1).text;
	const response = await fetch("http://127.0.0.1:5000/chat", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ text: userMessage }),
	});

	if (!response.ok) {
		throw new Error("Failed to fetch response from backend.");
	}

	const botMessage = await response.json();
	console.log("Bot message received:", botMessage); // Add this line for debugging

	if (!botMessage || !botMessage.content) {
		console.error("Invalid response from backend:", botMessage);
		setChatHistory([
			...history,
			{ role: "bot", text: "Something went wrong. Please try again." },
		]);
		return;
	}

	setChatHistory([...history, { role: "bot", text: botMessage.content }]);
} catch (error) {
	console.error("Error:", error);
	setChatHistory([
		...history,
		{ role: "bot", text: "Error fetching response." },
	]);
}

// 		i got Response status: 200
// Chatbot.jsx:109 Response text: {
//   "candidates": [
//     {
//       "content": {
//         "parts": [
//           {
//             "text": "Hi there! How can I help you today?\n"
//           }
//         ],
//         "role": "model"
//       },
//       "finishReason": "STOP",
//       "avgLogprobs": -0.0043565928936004639
//     }
//   ],
//   "usageMetadata": {
//     "promptTokenCount": 3,
//     "candidatesTokenCount": 11,
//     "totalTokenCount": 14,
//     "promptTokensDetails": [
//       {
//         "modality": "TEXT",
//         "tokenCount": 2
//       }
//     ],
//     "candidatesTokensDetails": [
//       {
//         "modality": "TEXT",
//         "tokenCount": 11
//       }
//     ]
//   },
//   "modelVersion": "gemini-1.5-flash"
// }

// Chatbot.jsx:104 Fetch finished loading: POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBGa03rLGbh3GYOSDEpXXlWlioRjFcb1MI".
// generateBotResponse @ Chatbot.jsx:104
// handleSubmit @ ChatForm.jsx:30
// callCallback2 @ chunk-TH7NCS4R.js?v=1bb5e3f0:3680
// invokeGuardedCallbackDev @ chunk-TH7NCS4R.js?v=1bb5e3f0:3705
// invokeGuardedCallback @ chunk-TH7NCS4R.js?v=1bb5e3f0:3739
// invokeGuardedCallbackAndCatchFirstError @ chunk-TH7NCS4R.js?v=1bb5e3f0:3742
// executeDispatch @ chunk-TH7NCS4R.js?v=1bb5e3f0:7046
// processDispatchQueueItemsInOrder @ chunk-TH7NCS4R.js?v=1bb5e3f0:7066
// processDispatchQueue @ chunk-TH7NCS4R.js?v=1bb5e3f0:7075
// dispatchEventsForPlugins @ chunk-TH7NCS4R.js?v=1bb5e3f0:7083
// (anonymous) @ chunk-TH7NCS4R.js?v=1bb5e3f0:7206
// batchedUpdates$1 @ chunk-TH7NCS4R.js?v=1bb5e3f0:18966
// batchedUpdates @ chunk-TH7NCS4R.js?v=1bb5e3f0:3585
// dispatchEventForPluginEventSystem @ chunk-TH7NCS4R.js?v=1bb5e3f0:7205
// dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay @ chunk-TH7NCS4R.js?v=1bb5e3f0:5484
// dispatchEvent @ chunk-TH7NCS4R.js?v=1bb5e3f0:5478
// dispatchDiscreteEvent @ chunk-TH7NCS4R.js?v=1bb5e3f0:5455
// Chatbot.jsx:125 TypeError: Failed to execute 'json' on 'Response': body stream already read
//     at generateBotResponse

// const generateBotResponse = async (history) => {
// 	history = history.map(({ role, text }) => ({
// 		role: role === "bot" ? "assistant" : role,
// 		content: text,
// 	}));

// 	try {
// 		const response = await fetch("http://localhost:5000/chat", {
// 			method: "POST",
// 			headers: { "Content-Type": "application/json" },
// 			body: JSON.stringify({ history }),
// 		});

// 		if (!response.ok) {
// 			console.error("Failed to fetch response from backend.");
// 			setChatHistory([
// 				...history,
// 				{ role: "bot", text: "Sorry, I couldn't connect to the server." },
// 			]);
// 			return;
// 		}

// 		let botMessage;
// 		try {
// 			botMessage = await response.json();
// 		} catch (error) {
// 			console.error("Failed to parse JSON:", error);
// 			setChatHistory([
// 				...history,
// 				{ role: "bot", text: "Sorry, something went wrong." },
// 			]);
// 			return;
// 		}

// 		if (!botMessage || !botMessage.content) {
// 			console.error("Invalid response from backend:", botMessage);
// 			setChatHistory([
// 				...history,
// 				{ role: "bot", text: "Something went wrong. Please try again." },
// 			]);
// 			return;
// 		}

// 		setChatHistory([...history, { role: "bot", text: botMessage.content }]);
// 	} catch (error) {
// 		console.error("Error: ", error);
// 	}
// };

// const generateBotResponse = async (history) => {
// 	try {
// 		const userMessage = history.at(-1).text;
// 		const response = await fetch("http://127.0.0.1:5000/chat", {
// 			method: "POST",
// 			headers: { "Content-Type": "application/json" },
// 			body: JSON.stringify({ text: userMessage }),
// 		});

// 		if (!response.ok) {
// 			throw new Error("Failed to fetch response from backend.");
// 		}

// 		const botMessage = await response.json();

// 		if (!botMessage || !botMessage.content) {
// 			console.error("Invalid response from backend:", botMessage);
// 			setChatHistory([
// 				...history,
// 				{ role: "bot", text: "Something went wrong. Please try again." },
// 			]);
// 			return;
// 		}

// 		setChatHistory([...history, { role: "bot", text: botMessage.content }]);
// 	} catch (error) {
// 		console.error("Error:", error);
// 		setChatHistory([
// 			...history,
// 			{ role: "bot", text: "Error fetching response." },
// 		]);
// 	}
// };
