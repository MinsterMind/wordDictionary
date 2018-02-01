'use strict'

const wordModel = require('../models/wordModel')

const addWord = async function (word) {
    await wordModel.addWord(word)
}

const getWords = async function (pageNumber, pageLimit) {
    return await wordModel.getWords(pageNumber, pageLimit)
}

module.exports = {
    addWord,
    getWords
}