export type checkScoreType = {
    level: number,
    value: number,
    time?: number
}

export type submitScoreType = {
    name: string,
    email: string,
    level: number,
    value: number,
    time?: number
}

export type topScoreType = {
    name: string,
    level: number,
    value: number,
    time: number,
    date: Date,
    status: string
}

export type LeaderBoardType = {
  id: number;
  level: number;
  value: number;
  time: number;
  createdAt: string;
  user: {
    name: string;
    status: string;
  }
}