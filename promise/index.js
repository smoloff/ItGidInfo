console.log('hello')

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => {
    if (response.ok) {
        return response.json()
    }
})
.then(json => console.log(json))
//   .then((response) => response.json())
//   .then((json) => console.log(json));