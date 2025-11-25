import express from 'express';
import { saveInviteTemplate, getInviteTemplate, generateInviteText, downloadInvitePdf } from '../controllers/inviteController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/save', verifyToken, saveInviteTemplate);
router.get('/:eventId', verifyToken, getInviteTemplate);
router.post('/generate-ai', verifyToken, generateInviteText);
router.post('/download-pdf', verifyToken, downloadInvitePdf);

export default router;
