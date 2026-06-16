export type LevelConfig = {
    numberOfBalls: number,
    minValue: number,
    maxValue: number,
    moving?: boolean,
    rotating?: boolean,
    changingSize?: boolean,
    ballValueOrder?: boolean,
    vanishingValue?: boolean,
    timer: 40 | 30 | 25 | 20 | 15 | 10

} 

export const LEVEL_CONFIG: Record<number, LevelConfig> = {
    // First line is what's showing in the demo area (Main Page)
    0: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 30 },


    1: { numberOfBalls: 6, minValue: 1, maxValue: 20, moving: true, timer: 40 },
    2: { numberOfBalls: 10, minValue: 1, maxValue: 20, moving: true, timer: 40 },
    3: { numberOfBalls: 14, minValue: 1, maxValue: 30, moving: true, timer: 40 },
    4: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 40 },
    5: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 40 },
    6: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 40 },
    7: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 40 },
    8: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, timer: 40 },
    9: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 40 },
    10: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 40 },
    11: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 40 },
    12: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 40 },    
    13: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 40 },
    14: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 40 },
    15: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 40 },
    16: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 40 },
    17: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 40 },
    18: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 40 },
    19: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, ballValueOrder: true, timer: 40 }, // ball values are now either ascending or descending
    20: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, ballValueOrder: true, timer: 40 }, // ball values are now either ascending or descending
    21: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, ballValueOrder: true, timer: 40 }, 
    22: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, ballValueOrder: true, timer: 40 }, 
    23: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, ballValueOrder: true, timer: 40 }, // some balls are rotating counterclockwise
    24: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, ballValueOrder: true, timer: 40 }, // some balls are rotating counterclockwise    
    25: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, ballValueOrder: true, timer: 40 },
    26: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, ballValueOrder: true, timer: 40 },
    27: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, ballValueOrder: true, timer: 40 },
    28: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, ballValueOrder: true, timer: 40 },
    29: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, ballValueOrder: true, timer: 40 },
    30: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, ballValueOrder: true, timer: 40 },

    //  With 30sec timer
    31: { numberOfBalls: 6, minValue: 1, maxValue: 20, moving: true, timer: 30 },
    32: { numberOfBalls: 10, minValue: 1, maxValue: 20, moving: true, timer: 30 },
    33: { numberOfBalls: 14, minValue: 1, maxValue: 30, moving: true, timer: 30 },
    34: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 30 },
    35: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 30 },
    36: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 30 },
    37: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 30 },
    38: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, timer: 30 },
    39: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 30 },
    40: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 30 },
    41: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 30 },
    42: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 30 },    
    43: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 30 },
    44: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 30 },
    45: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 30 },
    46: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 30 },
    47: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 30 },
    48: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 30 },
    49: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise
    50: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise
    51: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise
    52: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise
    53: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise
    54: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 30, ballValueOrder: true }, // some balls are rotating counterclockwise    
    55: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 30, ballValueOrder: true },
    56: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 30, ballValueOrder: true },
    57: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 30, ballValueOrder: true },
    58: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 30, ballValueOrder: true },
    59: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 30, ballValueOrder: true },
    60: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 30, ballValueOrder: true },

        //  With 25sec timer
    61: { numberOfBalls: 6, minValue: 1, maxValue: 20, moving: true, timer: 25 },
    62: { numberOfBalls: 10, minValue: 1, maxValue: 20, moving: true, timer: 25 },
    63: { numberOfBalls: 14, minValue: 1, maxValue: 30, moving: true, timer: 25 },
    64: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 25 },
    65: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 25 },
    66: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 25 },
    67: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 25 },
    68: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, timer: 25 },
    69: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 25 },
    70: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 25 },
    71: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 25 },
    72: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 25 },    
    73: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 25 },
    74: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 25 },
    75: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 25 },
    76: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 25 },
    77: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 25 },
    78: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 25 },
    79: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 25, ballValueOrder: true }, // some balls are rotating counterclockwise
    80: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 25, ballValueOrder: true }, // some balls are rotating counterclockwise
    81: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 25, ballValueOrder: true }, // some balls are rotating counterclockwise
    82: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 25, ballValueOrder: true }, // some balls are rotating counterclockwise
    83: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 25, ballValueOrder: true }, // some balls are rotating counterclockwise
    84: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 25, ballValueOrder: true }, // some balls are rotating counterclockwise    
    85: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 25, ballValueOrder: true },
    86: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 25, ballValueOrder: true },
    87: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 25, ballValueOrder: true },
    88: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 25, ballValueOrder: true },
    89: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 25, ballValueOrder: true },
    90: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 25, ballValueOrder: true },

        //  With 20sec timer
    91: { numberOfBalls: 6, minValue: 1, maxValue: 20, moving: true, timer: 20 },
    92: { numberOfBalls: 10, minValue: 1, maxValue: 20, moving: true, timer: 20 },
    93: { numberOfBalls: 14, minValue: 1, maxValue: 30, moving: true, timer: 20 },
    94: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 20 },
    95: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 20 },
    96: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 20 },
    97: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 20 },
    98: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, timer: 20 },
    99: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 20 },
    100: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 20 },
    101: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 20 },
    102: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 20 },    
    103: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 20 },
    104: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 20 },
    105: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 20 },
    106: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 20 },
    107: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 20 },
    108: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 20 },
    109: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 20, ballValueOrder: true }, // some balls are rotating counterclockwise
    110: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 20, ballValueOrder: true }, // some balls are rotating counterclockwise
    111: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 20, ballValueOrder: true }, // some balls are rotating counterclockwise
    112: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 20, ballValueOrder: true }, // some balls are rotating counterclockwise
    113: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 20, ballValueOrder: true }, // some balls are rotating counterclockwise
    114: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 20, ballValueOrder: true }, // some balls are rotating counterclockwise    
    115: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 20, ballValueOrder: true },
    116: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 20, ballValueOrder: true },
    117: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 20, ballValueOrder: true },
    118: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 20, ballValueOrder: true },
    119: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 20, ballValueOrder: true },
    120: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 20, ballValueOrder: true },

    // With 15 secs timer
    121: { numberOfBalls: 6, minValue: 1, maxValue: 20, moving: true, timer: 15 },
    122: { numberOfBalls: 10, minValue: 1, maxValue: 20, moving: true, timer: 15 },
    123: { numberOfBalls: 14, minValue: 1, maxValue: 30, moving: true, timer: 15 },
    124: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 15 },
    125: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 15 },
    126: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 15 },
    127: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 15 },
    128: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, timer: 15 },
    129: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 15 },
    130: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 15 },
    131: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 15 },
    132: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 15 },    
    133: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 15 },
    134: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 15 },
    135: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 15 },
    136: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 15 },
    137: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 15 },
    138: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 15 },
    139: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 15, ballValueOrder: true }, // some balls are rotating counterclockwise
    140: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 15, ballValueOrder: true }, // some balls are rotating counterclockwise
    141: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 15, ballValueOrder: true }, // some balls are rotating counterclockwise
    142: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 15, ballValueOrder: true }, // some balls are rotating counterclockwise
    143: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 15, ballValueOrder: true }, // some balls are rotating counterclockwise
    144: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 15, ballValueOrder: true }, // some balls are rotating counterclockwise    
    145: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 15, ballValueOrder: true },
    146: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 15, ballValueOrder: true },
    147: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 15, ballValueOrder: true },
    148: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 15, ballValueOrder: true },
    149: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 15, ballValueOrder: true },
    150: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 15, ballValueOrder: true },

        // With 15 secs timer
    151: { numberOfBalls: 6, minValue: 1, maxValue: 20, moving: true, timer: 10 },
    152: { numberOfBalls: 10, minValue: 1, maxValue: 20, moving: true, timer: 10 },
    153: { numberOfBalls: 14, minValue: 1, maxValue: 30, moving: true, timer: 10 },
    154: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 10 },
    155: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 10 },
    156: { numberOfBalls: 8, minValue: 1, maxValue: 50, moving: true, timer: 10 },
    157: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, timer: 10 },
    158: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, timer: 10 },
    159: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 10 },
    160: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, timer: 10 },
    161: { numberOfBalls: 12, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 10 },
    162: { numberOfBalls: 14, minValue: 1, maxValue: 50, moving: true, changingSize: true, rotating: true, timer: 10 },    
    163: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 10 },
    164: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 10 },
    165: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 10 },
    166: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 10 },
    167: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 10 },
    168: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 10 },
    169: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, timer: 10, ballValueOrder: true }, // some balls are rotating counterclockwise
    170: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, timer: 10, ballValueOrder: true }, // some balls are rotating counterclockwise
    171: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 10, ballValueOrder: true }, // some balls are rotating counterclockwise
    172: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, timer: 10, ballValueOrder: true }, // some balls are rotating counterclockwise
    173: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 10, ballValueOrder: true }, // some balls are rotating counterclockwise
    174: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, timer: 10, ballValueOrder: true }, // some balls are rotating counterclockwise    
    175: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 10, ballValueOrder: true },
    176: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, vanishingValue: true, timer: 10, ballValueOrder: true },
    177: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 10, ballValueOrder: true },
    178: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, vanishingValue: true, timer: 10, ballValueOrder: true },
    179: { numberOfBalls: 12, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 10, ballValueOrder: true },
    180: { numberOfBalls: 14, minValue: 1, maxValue: 99, moving: true, changingSize: true, rotating: true, vanishingValue: true, timer: 20, ballValueOrder: true },
}