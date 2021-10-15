const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      for (let i = 0; i < users.length; i++) {
        let existing = bcrypt.compareSync(password, users[i].passHash)

        if (existing) {
          // users[i].usernames.push(username)
          let userReturn = {...users[i]}
          res.status(200).send(users[i])
          // delete userReturn.pasHash
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const { password, username, email, firstName, lastName } = req.body

      let salt = bcrypt.genSaltSync(5)
        // console.log(salt)
      
      let passHash = bcrypt.hashSync(password, salt)
        // console.log(password, passwordHash)
      
      const newUser = {
        passHash,
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName,
      }
      
        // console.log('Registering User')
        console.log(req.body)
        users.push(newUser)
        let userReturn = {...newUser}
        delete userReturn.pasHash
        res.status(200).send(userReturn)
    }
}
