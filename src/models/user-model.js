import db from '../config/db';
import bcrypt from 'bcrypt';

const userSchema = new db.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
        },
        required: true
    },
    senha: {
        type: String,
        required: true,
        minLength: 5,
    },
    permission_type : {
        type: String,
        enum: ['ADM', 'USU'],
        required: true,
        default: 'USU',
    },
    cep: {
        type: Object,
        minLength: 8,
        maxLength: 8,        
    },
})

userSchema.pre('save', async function() {
    this.senha = await bcrypt.hash(this.senha, 10)
});

userSchema.methods.senhaCorreta = async function (senha) {
    return await bcrypt.compare(senha, this.senha)
}

const User = db.model('User', userSchema)

export default User