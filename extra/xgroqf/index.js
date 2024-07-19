"use strict";

require('dotenv').config(); // Load environment variables from .env file

const Groq = require("groq-sdk");
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

async function getGroqChatCompletion() {
  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "what is a god"
      }
    ],
    model: "mixtral-8x7b-32768"
  });
  console.log(response.choices[0]?.message?.content);
}

getGroqChatCompletion();
