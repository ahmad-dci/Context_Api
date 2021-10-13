export const searchData = searchWord => {
    return new Promise((resolve, reject) => {
        fetch(`https://pixabay.com/api/?key=23836825-d28900a4f5025893278996a18&q=${searchWord}`)
        .then(response => {
            if (response.status === 200 ) {
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(new Error(`response number is ${response.status}`))
            }
        }).catch(error => {
            reject(error)
        })
    })
} 