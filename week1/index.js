const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            return reject("error ocuured!")
        }
        resolve("Sucess!!")
    }, 2000)
})

myPromise
    .then((result) => {
        console.log(result)
        return "Next step"
    })
    .catch((error) => {
        console.error{error}
    })
    .finally() => {
        console.log("preosekmfd")
    }