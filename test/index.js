const a = [1, [3, [4, 5], 4], [5, 4]]

// const KEY = 5

// const search = (array, key) => {
//     const finded = []

//     const searchInArray = (arr) => {
//         for (let item of arr) {
//             if (item instanceof Array) {
//                 searchInArray(item)
//             }

//             if (item === key) {
//                 finded.push(item)
//             }
//         }
//     }

//     searchInArray(array)
//     return finded
// }

//  const s = search(a, KEY)
// console.log( s);


const search = (key) => {
   const k = key

   return  searchInArray = (arr) => {
        for (let item of arr) {
            if (item instanceof Array) {
                searchInArray(item)
            }

            if (item === k) {
                // return ('YES')
                console.count('YES')
            }
        }
    }
}

 let s = search(5)

s([3,4,5,56,[555,5,3,2],2,5])


