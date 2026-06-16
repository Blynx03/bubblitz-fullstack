
const checkQualification = (leaderboard, topScoreLimit, level, value, time) => {

  if (leaderboard.length === 0) {
    return { qualifies: true, rank: 1 }
  } else {
    for (let i = 0; i < leaderboard.length; i++) {
      let score = leaderboard[i];

      if ((level > score.level) ||
        (level === score.level && value > score.value) ||
        (level === score.level && value === score.value && time > score.time))  
      {
        return { qualifies: true, rank: i + 1 }
      }

    }
    if (leaderboard.length < topScoreLimit) {
      return { qualifies: true, rank: leaderboard.length + 1 }
    }
  }

  // if all condition is false in the above loop then the below will be returned
  return { qualifies: false, rank: leaderboard.length + 1}

}

export default checkQualification