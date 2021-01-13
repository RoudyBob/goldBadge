let favoriteMovies = {
    nameOfMovie: "Back to the Future",
    runTime: 116,
    characters: [
      {charOne: {name:"Marty", age: 17, items: [{itemOne: "hoverboard", itemTwo: "photo"}]}},
      {charTwo: {name:"Doc", age: 71, items: [{itemOne: "flux capacitor", itemTwo: "Delorean"}]}}
      ],
    genre: "Adventure, Comedy, Sci-Fi",
  }
  
  console.log(favoriteMovies.nameOfMovie);
  console.log(favoriteMovies.runTime);
  console.log(favoriteMovies.characters);
  console.log(favoriteMovies.characters[0].charOne.name);
  console.log(favoriteMovies.characters[0].charOne.items[0].itemOne);