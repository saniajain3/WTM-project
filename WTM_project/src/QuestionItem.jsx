const QuestionItem = ({ icon, question, content, contentClassName = "" }) => {
	return (
		<div className="p-4">
			<div className="flex items-center">
				{icon}
				<p className="ml-2 font-normal text-lg">{question}</p>
			</div>
			{content}
		</div>
	);
};
export default QuestionItem;
