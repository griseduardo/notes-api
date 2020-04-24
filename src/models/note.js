const mongoose = require('mongoose')
const validator = require('validator')

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
        type: String,
        required: true,
        validate(value) {
            if (!validator.isMobilePhone(value, 'pt-BR')) {
                throw new Error('Número não é válido, usar formato +5511XXXXXXXXX')
            }
        }
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: String,
        default: ((new Date()).getDate()) + '/' + ((new Date()).getMonth()+1) + '/' + ((new Date()).getFullYear())
    }
})

module.exports = Note