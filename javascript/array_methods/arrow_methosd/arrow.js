const movies = [
    {
      
      title: 'Amadeus',
      score: 99
  
    },
    {
  
    title: 'Stand By Me',
    score: 85
  
    },
  
    {
        title: 'Parasite',
        score: 95
    },
  
    {
        title: 'Alien',
        score: 90
    }
]

const titles = movies.map(function(movie){
    return movie.title.toUpperCase();
})


const add = (x,y) => {
    return x + y
}

const square = (x) => {
    return x * x;
}