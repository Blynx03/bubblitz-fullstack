import { prisma } from "../config/db.js";


export const fetchLeaderboard = async (req, res) => {
    const numOfTopPlayers = 25;
    const { viewTopPlayers } = req.query;
    try {
        const allScoresSorted = await prisma.scores.findMany({
            orderBy: [
                { level: "desc" },
                { value: "desc" },
                { time: "desc" }
            ],
            ...(viewTopPlayers === 'true' && { take: numOfTopPlayers }),
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        status: true
                    }
                }
            }
        })        
        return res.status(200).json(allScoresSorted);
    }
    catch (error) {
        return res.status(500).json({ error: "Server Error"})
    }
}