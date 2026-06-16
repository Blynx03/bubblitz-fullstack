import { prisma } from "../config/db.js";

export const submitScore = async (req, res) => {
    try {
        const { name, email, level, value, time, createdAt } = req.body; // note that value = # of balls popped

        // check user status
        // check if user already exists
        // if user already exists, then update the status to ACTIVE else create new record and status should be NEW
        // return top 20 (name, level, time and createdAt from db), and rank
        const currentUser = await prisma.user.upsert({
            where: { email },
            update: { status: "ACTIVE"},
            create: { name, email, status: "NEW", createdAt }
        })

        // update scores table
        await prisma.scores.create({
            data: { 
                userId: currentUser.id,
                level,
                value,
                time,
                createdAt
            }
        })


        // get top 25 players
        const topPlayers = await prisma.scores.findMany({
            orderBy: [
                { level: "desc" },
                { value: "desc" },
                { time: "desc" }
            ],
            take: 25,
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
        return res.status(200).json(topPlayers)

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error"});
    }
}