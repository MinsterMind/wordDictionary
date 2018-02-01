'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wordSchema = new Schema({
    word: String,
    meaning:[String],
    synonyms: [String]
})

wordSchema.index({word: 1}, {unique: true})

module.exports = wordSchema