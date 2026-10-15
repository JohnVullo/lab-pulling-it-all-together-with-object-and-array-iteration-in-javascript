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
                "Reggie Evens": {
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
            },
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
                "Bismack Biyombo": {
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
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

//Grabs all data from function, and stores it as gameData
const gameData = gameObject()


 //Takes player name returns points scored
function numPointsScored(playerName){
    const homeArray = Object.entries(gameData.home.players).find(key => key[0] === playerName)
    if(homeArray === undefined){
            const awayArray = Object.entries(gameData.away.players).find(key => key[0] === playerName)
            const playerPoints = awayArray[1].points
            console.log("Name: ", playerName)
            console.log("Points: ", playerPoints)
            return playerPoints
    } else {
        const playerPoints = homeArray[1].points
        console.log("Name: ", playerName)
        console.log("Points: ", playerPoints)
        return playerPoints
    }
}

numPointsScored("Alan Anderson")

//takes player name and returns shoe size
function shoeSize(playerName){
    const homeArray = Object.entries(gameData.home.players).find(key => key[0] === playerName)
    if(homeArray === undefined){
            const awayArray = Object.entries(gameData.away.players).find(key => key[0] === playerName)
            const playerShoe = awayArray[1].shoe
            console.log("Name: ", playerName)
            console.log("Shoe size: ", playerShoe)
            return playerShoe
    } else {
        const playerShoe = homeArray[1].shoe
        console.log("Name: ", playerName)
        console.log("Shoe size: ", playerShoe)
        return playerShoe
    }
}

shoeSize("Ben Gordon")

//takes team name and returns array of team colors
function teamColors(teamName) {
    if(gameData.home.teamName === teamName) {
        console.log("The ", teamName, "colors are: ", gameData.home.colors)
        return gameData.home.colors
    } else {
        console.log("The ", teamName, "colors are: ", gameData.away.colors)
        return gameData.away.colors
    }
}

teamColors("Charlotte Hornets")


//returns array of both teams
function teamNames() {
    const teamArray = []
    teamArray.push(gameData.home.teamName)
    teamArray.push(gameData.away.teamName)
    console.log(teamArray)
    return teamArray
}

teamNames()

//returns array of players' jersey numbers
function playerNumbers(teamName){
    let playerNumber = []
    if(gameData.home.teamName === teamName){
        const playerArray = Object.values(gameData.home.players)
        for(let num in playerArray){
            playerNumber.push(playerArray[num].number)
            console.log(`Jersey number: ${playerNumber[num]}`)
        }
        return playerNumber
    } else {
        const playerArray = Object.values(gameData.away.players)
        for(let num in playerArray){
            playerNumber.push(playerArray[num].number)
            console.log(`Jersey number: ${playerNumber[num]}`)
        }
        return playerNumber
    }
}

console.log(playerNumbers("Charlotte Hornets"))


//returns object of all stats of player
function playerStats(playerName){
    const homeArray = Object.entries(gameData.home.players).find(key => key[0] === playerName)
    if(homeArray === undefined){
            const awayArray = Object.entries(gameData.away.players).find(key => key[0] === playerName)
            console.log(awayArray[1])
            return awayArray[1]
    } else {
        console.log(homeArray[1])
        return homeArray[1]
    }
}

playerStats("Alan Anderson")



//returns number of rebounds of player with largest shoe
//function bigShoeRebounds() 

//determines what players scored the most points
//function mostPointsScored() 

//what team has the most total points
//function winningTeam() 

//finds player with longest name
//function playerWithLongestName() 

//returns true if player with longest name has most steals
//function doesLongNameStealATon() 
