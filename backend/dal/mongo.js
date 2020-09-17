require('dotenv').config()
const { MongoClient } = require ('mongodb')
const ObjectId = require('mongodb').ObjectId

let client

function connect(locals) {

    const uri = `mongodb+srv://adam84miller:${ process.env.DB_PASSWORD }@cluster0.g4qc0.mongodb.net/${ process.env.DB_DATABASE }?retryWrites=true&w=majority`
    
    client = new MongoClient (uri, { useUnifiedTopology: true })

    return client.connect()
    .then((connection) => {
        locals.collectionUsers = connection.db(`${ process.env.DB_DATABASE }`).collection('users')
        // locals.collectionUsers = connection.db(`${ process.env.DB_DATABASE }`).collection('')
        // locals.collectionUsers = connection.db(`${ process.env.DB_DATABASE }`).collection('')
        // locals.collectionUsers = connection.db(`${ process.env.DB_DATABASE }`).collection('')
        // locals.collectionUsers = connection.db(`${ process.env.DB_DATABASE }`).collection('')
        // locals.collectionUsers = connection.db(`${ process.env.DB_DATABASE }`).collection('')
        // locals.collectionUsers = connection.db(`${ process.env.DB_DATABASE }`).collection('')
        // locals.collectionUsers = connection.db(`${ process.env.DB_DATABASE }`).collection('')
        // locals.collectionUsers = connection.db(`${ process.env.DB_DATABASE }`).collection('')
        // locals.collectionUsers = connection.db(`${ process.env.DB_DATABASE }`).collection('')
        // locals.collectionUsers = connection.db(`${ process.env.DB_DATABASE }`).collection('')

    })
    .catch(err => {
        console.log(err)
        process.exit()
    })  

}

function close() {
    client.close
}

module.exports.connect = connect
module.exports.close = close
