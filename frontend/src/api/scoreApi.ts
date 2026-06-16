import type { checkScoreType, submitScoreType } from "../context/scoreContext";

const API_URL = import.meta.env.VITE_API_URL;

export const getLeaderboard = async (viewTopPlayers: boolean) => {
    const res = await fetch(`${API_URL}/leaderboard?viewTopPlayers=${viewTopPlayers}`);
    const data = await res.json();
    
    if (!res.ok) return [];

    return data;
}

export const checkScore = async (checkScoreData: checkScoreType) => {
    const res = await fetch(`${API_URL}/check`, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(checkScoreData)
        }
    )
    const data = await res.json();
    return data
}

export const submitScore = async (submitScoreData: submitScoreType) => {
    const res = await fetch(`${API_URL}/submit`, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submitScoreData)
        }
    )
    const data = res.json();
    return data
}