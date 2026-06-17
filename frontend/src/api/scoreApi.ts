import type { checkScoreType, submitScoreType } from "../context/scoreContext";

const API_URL = import.meta.env.VITE_API_URL + '/api/score';

export const getLeaderboard = async (viewTopPlayers: boolean) => {
    const res = await fetch(`${API_URL}/leaderboard?viewTopPlayers=${viewTopPlayers}`);
    
    if (!res.ok) return [];

    const data = await res.json();
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
    if (!res.ok) {
        throw new Error(`API request failed: ${res.status}`);
    }
    
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
    if (!res.ok) {
        throw new Error(`API request failed: ${res.status}`);
    }
    
    const data = await res.json();
    return data
}