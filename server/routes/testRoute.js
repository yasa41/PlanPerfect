import express from 'express';
import openai from '../config/openai.js'; 

const router = express.Router();

router.post('/test-ai', async (req, res) => {
  try {
    const prompt = "Suggest ideas to eat something savoury and from south india.";
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // or "gpt-4", "gpt-3.5-turbo"
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt }
      ],
      max_tokens: 50,
      temperature: 0.7,
    });
    res.json({ success: true, text: response.choices[0].message.content.trim() });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
