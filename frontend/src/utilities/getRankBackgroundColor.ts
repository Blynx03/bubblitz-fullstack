
const getRankBackgroundColor = (rank: number | null, i: number) => {
    const rankColor = 
        i + 1 === 1 
        ? "var(--leaderboard-gold)" 
        : i + 1 === 2 
            ? "var(--leaderboard-silver)" 
            : i + 1 === 3 
                ? "var(--leaderboard-bronze)"
                : rank === i + 1 
                    ? "var(--leaderboard-current)"
                    : "hsl(var(--leaderboard-color) / 0.8)"

  return rankColor
}

export default getRankBackgroundColor