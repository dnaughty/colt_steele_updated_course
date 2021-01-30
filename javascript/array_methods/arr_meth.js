const numbers = [1,2,3,4,5,6,7,8,9,10]

// numbers.forEach(function (el) {
//     console.log(el)
// })

// print(numbers[0])
// print(numbers[1])

// numbers.forEach(print)

// for (let el of numbers) {
//     if (el % 2 == 0) {
//         console.log(el)
//     }
// }

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
  },

]
  movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
  })
