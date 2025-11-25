import InviteTemplate from '../models/inviteModel.js';
import openai from '../config/openai.js';
import { generatePdfBuffer } from '../config/pdfGenerator.js';

// Save or update invite template
export const saveInviteTemplate = async (req, res) => {
  const { eventId, name, content } = req.body;
  try {
    let invite = await InviteTemplate.findOne({ eventId });
    if (!invite) {
      invite = new InviteTemplate({ eventId, name, content });
    } else {
      invite.name = name;
      invite.content = content;
    }
    await invite.save();
    res.json({ success: true, invite });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get invite template by event ID
export const getInviteTemplate = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const invite = await InviteTemplate.findOne({ eventId });
    if (!invite) return res.status(404).json({ success: false, message: "Invite template not found" });
    res.json({ success: true, invite });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// AI generation of invite text
export const generateInviteText = async (req, res) => {
  const { eventDetails } = req.body; // e.g., { eventName, date, venue, theme }
  try {
    const prompt = `Create a warm, inviting invitation text for an event with details: ${JSON.stringify(eventDetails)}`;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 250,
      temperature: 0.7,
    });
    const generatedText = response.data.choices[0].text.trim();
    res.json({ success: true, text: generatedText });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Download invite as PDF
export const downloadInvitePdf = async (req, res) => {
  const { inviteHtml } = req.body;
  try {
    const pdfBuffer = await generatePdfBuffer(inviteHtml);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="invite.pdf"',
      'Content-Length': pdfBuffer.length,
    });
    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
