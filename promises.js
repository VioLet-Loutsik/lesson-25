let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert('Hello From Promise')
        resolve('Promise resolved')
    }, 1000 )
})

promise
    .then((result) => {
        console.log(result)
        alert(result)
        return 'Go to next promise'
    })
    .then(result => {
        alert(result)
        console.log(result)
    })
    .catch(err => {
        alert(err)
    })
    .finally(() => {
        alert('Finaly here')
    })