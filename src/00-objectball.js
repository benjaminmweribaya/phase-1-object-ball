function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            }
        }
    }
}

console.log(gameObject());

function awayTeamName() {
    let object = gameObject();
    return object["away"]["teamName"];
}

console.log(awayTeamName());

function homeTeamColors() {
    let object = gameObject();
    return object["home"]["colors"];
}

console.log(homeTeamColors());

function awayTeamColors() {
    return gameObject()["away"]["colors"];
}

console.log(awayTeamColors());

function playerStats(playerName) {
    let object = gameObject();

    if (object["home"]["players"][playerName]) {
        return object["home"]["players"][playerName];
    }

    if (object["away"]["players"][playerName]) {
        return object["away"]["players"][playerName];
    }

    return undefined;
}

console.log(playerStats("Mason Plumlee"));

function playerPoints(playerName) {
    let stats = playerStats(playerName);
    return stats ? stats["points"] : undefined;
}

console.log(playerPoints("Ben Gordon"));

function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].points;
        }
    }
    return undefined;
}

function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].shoe;
        }
    }
    return undefined;
}

function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return undefined;
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return Object.values(game[team].players).map(player => player.number);
        }
    }
    return undefined;
}

function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
    return undefined;
}

function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;

    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].shoe > largestShoeSize) {
                largestShoeSize = game[team].players[player].shoe;
                rebounds = game[team].players[player].rebounds;
            }
        }
    }
    return rebounds;
}

function mostPointsScored() {
    const game = gameObject();
    let highestPoints = 0;
    let playerWithMostPoints = '';

    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].points > highestPoints) {
                highestPoints = game[team].players[player].points;
                playerWithMostPoints = player;
            }
        }
    }
    return playerWithMostPoints;
}

function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    for (const player in game.home.players) {
        homePoints += game.home.players[player].points;
    }

    for (const player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }

    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';

    for (const team in game) {
        for (const player in game[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName;
}

function doesLongNameStealATon() {
    const longestName = playerWithLongestName();
    const game = gameObject();
    let mostSteals = 0;

    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].steals > mostSteals) {
                mostSteals = game[team].players[player].steals;
            }
        }
    }

    return gameObject().home.players[longestName]?.steals === mostSteals ||
        gameObject().away.players[longestName]?.steals === mostSteals;
}





