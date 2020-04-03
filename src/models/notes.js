const mongoose = require('mongoose')

const Note = mongoose.model('Note', {
    patient: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        validate(value) {
            if (!validator.isMobilePhone(value, 'pt-BR')) {
                throw new Error('Número não é válido')
            }
        }
    },
    date: {
        value = new Date()
    }
})

module.exports = Note