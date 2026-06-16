import { prisma } from "../config/db.js";
import checkQualification from "../utilities/checkQualification.js";


export const checkScore = async (req, res) => {
    try {
        const { level, value, time } = req.body;
        const topScoreLimit = 25;

        if (level === undefined || value === undefined || time === undefined) {
            return res.status(400).json({ error: "Level, value and time are required"});
        }

        const leaderboard = await prisma.scores.findMany({
            orderBy: [
                { level: "desc" },
                { value: "desc" },
                { time: "desc" }
            ],
            take: topScoreLimit
        });

        // check if score qualifies
        let isQualified = checkQualification(leaderboard, topScoreLimit, level, value, time);
        
        // returning result if score made it or not to top 20
        return res.json({
            qualifies: isQualified.qualifies,
            rank: isQualified.rank
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error"});
    }

}