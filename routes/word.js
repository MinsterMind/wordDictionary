'use strict'

const wordController = require('../controllers/wordController')
const _ = require('lodash')

module.exports = [
    {
        method: 'GET',
        path: '/api/word',
        handler: async function (req, h) {
            // const pageNumber = parseInt(req.query.pageNumber) || 0
            const pageLimit =   parseInt(req.query.pageLimit) || 3
            const nextId = req.query.nextId !== "undefined" ? req.query.nextId: null
            try {
                return await wordController.getWords(nextId, pageLimit)
            } catch (ex) {
                console.log(ex)
            }
        }
    },
    {
        method: 'Delete',
        path: '/api/word/{id}',
        handler: function (req, h) {
            return wordController.deleteWord(req.params.id)
        }
    },
    {
        method: 'POST',
        path: '/api/word',
        handler: async function (req, h) {
            try {
                const data = req.payload
                const wordData = _.isString(data)?JSON.parse(data): data
                await wordController.addWord(wordData)
                return h.response('success')
            } catch (ex) {
                return h.response("Cannot add word").code(406)
            }

        }
    },
    {
        method: 'PUT',
        path: '/api/word',
        handler: async function (req, h) {
            try {
                const data = req.payload
                const wordData = _.isString(data)?JSON.parse(data): data
                await wordController.updateWord(wordData)
                return h.response('success')
            } catch (ex) {
                return h.response("Cannot add word").code(406)
            }

        }
    }
]