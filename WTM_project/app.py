from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

import re



app = Flask(__name__)
CORS(app)

# Load BioGPT model for generating responses
from transformers import BioGptTokenizer, BioGptForCausalLM

model_name = "microsoft/BioGPT-Large-PubMedQA"
tokenizer = BioGptTokenizer.from_pretrained(model_name)
model = BioGptForCausalLM.from_pretrained(model_name)

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
       
        user_message=data.get('text')

        # Encode and generate the response
        input_ids = tokenizer.encode(user_message, return_tensors="pt", add_special_tokens=True)
        # outputs = model.generate(input_ids, max_length=100, num_return_sequences=1)
        outputs = model.generate(
            input_ids,
            max_length=200,
            num_return_sequences=1,
            temperature=0.7,
            top_k=50,
            top_p=0.95,
            do_sample=True
        )

        bot_response = tokenizer.decode(outputs[0], skip_special_tokens=True).strip()
        bot_response = bot_response.replace("< / FREETEXT >", "").replace("< / TITLE >", "").strip()
        # Remove all XML-style tags like <PARAGRAPH> or < FREETEXT >
        bot_response = re.sub(r"<[^>]*>", "", bot_response)
        bot_response = bot_response.strip()

        return jsonify({"role": "assistant", "content": bot_response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(port=5000)
 # history = data.get('history', [])
        # user_message = history[-1]["content"]