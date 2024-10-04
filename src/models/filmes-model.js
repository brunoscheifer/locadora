import db from '../config/db.js'

const filmesSchema = new db.Schema({
    name: {
        type: String,
        require: true,
    },
    release_date: {
        type: Date,
        required: true,
    },
    director: {
        type: String,
        required: true
    },
    classification: {
        type: String,
        enum: ['Livre', 'Maior16', 'Maior18'],
        require: true
    }
})

const Filme = db.model('Filme', filmesSchema);

export default Filme