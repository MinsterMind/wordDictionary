'use strict'

const wordController = require('../controllers/wordController')
const _ = require('lodash')

module.exports = [
    {
        method: 'GET',
        path: '/api/word',
        handler: async function (req, h) {
            const pageNumber = parseInt(req.query.pageNumber) || 0
            const pageLimit =   parseInt(req.query.pageLimit) || 3
            try {
                return await wordController.getWords(pageNumber, pageLimit)
            } catch (ex) {
                console.log(ex)
            }
        }
    },
    {
        method: 'GET',
        path: '/api/word/{id}',
        handler: function (req, h) {
            return `id: ${req.params.id}`
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
    }
]