import mongoose from 'mongoose';

const inviteTemplateSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  name: { type: String, required: true },          // e.g., "Wedding Invite", "Corporate Event"
  content: { type: String, required: true },       // HTML or rich text content of the invite
}, { timestamps: true });

const InviteTemplate = mongoose.models.InviteTemplate || mongoose.model('InviteTemplate', inviteTemplateSchema);
export default InviteTemplate;
