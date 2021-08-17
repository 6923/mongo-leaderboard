const express = require('express')
const db = require('./db')

const router = express.Router()

// GET ALL
router.get('/', async (req, res, next) => {
	await db.getScores()
		.then(scores => res.json(scores))
		.catch(next)
})

// GET ONE
router.get('/:id', async (req, res, next) => {
	const { id } = req.params
	await db.getScore(id)
		.then(scores => res.json(scores))
		.catch(next)
})

// CREATE
router.post('/', async (req, res, next) => {
	await db.createScore(req.body)
		.then(score => res.json(score))
		.catch(next)
})

// UPDATE
router.put('/:id', async (req, res, next) => {
	const { id } = req.params
	await db.updateScore(id, req.body)
		.then(result => res.json(result))
		.catch(next)
})

// DELETE
router.delete('/:id', async (req, res, next) => {
	const { id } = req.params
	await db.deleteScore(id)
		.then(result => res.json(result))
		.catch(next)
})

module.exports = router