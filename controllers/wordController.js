'use strict'

const wordModel = require('../models/wordModel')

const addWord = async function (word) {
    await wordModel.addWord(word)
}

const getWords = async function (pageNumber, pageLimit) {
    return await wordModel.getWords(pageNumber, pageLimit)
}

const deleteWord = async function (word) {
    return await wordModel.deleteWord(word)
}

const updateWord = async function (word) {
    await wordModel.updateWord(word)
}
module.exports = {
    addWord,
    getWords,
    deleteWord,
    updateWord
}