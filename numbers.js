// // let a = 1
// // let b = 2
// // let c = 3
// // let d = 4



// // console.log(a)
// // setTimeout(() => {

// // console.log(b)
// // }, 2000)
// // setTimeout(() => {console.log(c)
// // }, 0) 
// // console.log(d)
// ///////////////////////
// // let users = ["dan", "ben", "stuart"]

// // const adduser = (username, callback) => {
// //     setTimeout(()=> {
// //         users.push(username)
// //         callback()
// //     },2000)
// // }

// // const getUsers = () => {
// //     setTimeout(() => {
// //         console.log(users)
// // }, 1000)
// // }

// // adduser(`Charlie`, getUsers)
// /////

// const addUser = (username) => {
//     return new Promise ((resolve, reject) => {

//         setTimeout(() => {
//             username.push(username)

//             let error = false

//             if (!error){
//             resolve()
//         } else {
//             reject (`Oops there has been an error`)
//         }
//     }, 2000)

// })
// }
//

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
     if (location === 'Google'){
         resolve('Google says hi')
     } else {
         reject('We can only talk to Google')
     }
     })

}

function processRequest(response) {
    return new Promise ((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// makeRequest('Google').then(response => {
//     console.log('Response Received')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })
//

async function doWork() {
    try{
        const response = await makeRequest ('portal')
        console.log('Response Received')
       const processedResponse = await processRequest(response)
       console.log(processedResponse)
    } catch (err) {
        console.log(err)
    }
}
doWork()