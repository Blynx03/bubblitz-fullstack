import express from 'express';
import { checkScore } from '../controllers/checkScoreController.js';
import { submitScore } from '../controllers/submitScoreController.js';
import { fetchLeaderboard } from '../controllers/fetchLeaderboardController.js';

const router = express.Router();

router.post("/check", checkScore);
router.post("/submit", submitScore);
router.get("/leaderboard", fetchLeaderboard);

export default router;