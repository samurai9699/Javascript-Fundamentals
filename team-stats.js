const team = {
    _players:[
      {
        firstName: 'Lukas',
        lastName: 'Podolski',
        age: 35
      },
      {
        firstName: 'Mario',
        lastName: 'Gómez',
        age: 35
      },
      {
        firstName: 'Bastian',
        lastName: 'Schweinsteiger',
        age: 36
      }
    ],
    _games: [
      {
        opponent: 'Argentina',
        teamPoints: 1,
        opponentPoints: 0
      },
      {
        opponent: 'Brazil',
        teamPoints: 7,
        opponentPoints: 1
      },
      {
        opponent: 'France',
        teamPoints: 1,
        opponentPoints: 0
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints){
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Miroslav', 'Klose', 42);
  team.addPlayer('Manuel', 'Neuer', 42);
  team.addPlayer('Philipp', 'Lahm', 42);
  team.addGame('Algeria', 2, 1);
  team.addGame('USA', 0, 1);
  team.addGame('Ghana', 2, 2);
  console.log(team._players);
  console.log(team._games);