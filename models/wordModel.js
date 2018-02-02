'use strict'

const mongoose = require('mongoose')

const wordSchema = require('./schema/word')

mongoose.connect('mongodb://localhost:27017/word')

var Word = mongoose.model('Wordd', wordSchema)

const addWord = async function (word) {
    const newWord = new Word({
        word: word.word,
        meaning: word.meaning,
        synonyms: word.synonyms
    })

    return await newWord.save()
}

const getWords = async function (pageNumber, pageLimit) {
    const wordRecords = await Word.find({}).sort({_id: -1}).skip(pageNumber*pageLimit).limit(pageLimit).exec()
    return wordRecords
}

const deleteWord = async function (word) {
    return await Word.remove({word: word})
}

const updateWord = async function (word) {
    return Word.update({word: word.word}, {meaning:word.meaning, synonyms:word.synonyms})
}
module.exports = {
    addWord,
    getWords,
    deleteWord,
    updateWord
}