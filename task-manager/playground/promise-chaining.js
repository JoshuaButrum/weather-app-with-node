require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('67c0b97ae874b50f10836402', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('67c0b97ae874b50f10836402', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})