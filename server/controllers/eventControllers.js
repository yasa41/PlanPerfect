import Event from '../models/eventModel.js';
import User from '../models/userModel.js';

// List all events
export const listEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json({ success: true, events });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get event details by id
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ success: false, message: "Event not found" });
    res.json({ success: true, event });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add an event to user's workingEvents
export const addWorkingEvent = async (req, res) => {
  try {
    const userId = req.user.id;
    const { eventId } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    if (!user.workingEvents.includes(eventId)) {
      user.workingEvents.push(eventId);
      await user.save();
    }
    res.json({ success: true, workingEvents: user.workingEvents });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove an event from user's workingEvents
export const removeWorkingEvent = async (req, res) => {
  try {
    const userId = req.user.id;
    const { eventId } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    user.workingEvents = user.workingEvents.filter(id => id.toString() !== eventId);
    await user.save();

    res.json({ success: true, workingEvents: user.workingEvents });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get user’s currently working events with details
export const getWorkingEvents = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate('workingEvents');
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    res.json({ success: true, workingEvents: user.workingEvents });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
