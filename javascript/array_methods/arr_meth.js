// const numbers = [1,2,3,4,5,6,7,8,9,10]

// // numbers.forEach(function (el) {
// //     console.log(el)
// // })

// // print(numbers[0])
// // print(numbers[1])

// // numbers.forEach(print)

// // for (let el of numbers) {
// //     if (el % 2 == 0) {
// //         console.log(el)
// //     }
// // }

// const movies = [
//   {
    
//     title: 'Amadeus',
//     score: 99

//   },
//   {

//   title: 'Stand By Me',
//   score: 85

//   },

//   {
//       title: 'Parasite',
//       score: 95
//   },

//   {
//       title: 'Alien',
//       score: 90
//   },

// ]
// //   movies.forEach(function (movie) {
// //     console.log(`${movie.title} - ${movie.score}/100`)
// //   })

// // numbers.map(function(num){
// //     console.log(num * 2);
// // })

// // const titles = movies.map (function(movie){
// //     return movie.title;
// // })

// // const ratings = movies.map(function(rate){
// //     return rate.score
// // })

// // numbers.filter(n => {
// //   return n === 4
// // })

// // fil = numbers.filter(n => {
// //   return n < 10
// // })

// // const goodMovies = movies.filter (movie => {
// //   return movie.score > 91
// // })

// // const goodTitles = goodMovies.map(m => m.title)

// // const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77]

// // exams.every(score => score >= 75 )

// // exams.some(score => score >= 90 )

const prices = [10, 10, 5, 100]

// const total = prices.reduce((total, price) => {
//   return total + price
// })

const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
})

