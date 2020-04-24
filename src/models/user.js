const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email não é válido')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
    },
    professional_area: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(!validator.contains(value.toLowerCase(), 'secretaria' || 'administrativa' || 'medica')) {
                throw new Error('Necessário ser umas das área: secretaria ou administrativa ou medica')
            }
        }
    }
})

module.exports = User