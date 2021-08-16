const express = require('express')

const router = express.Router()

// GET ALL
router.get('/', (req, res, next) => {
	res.json({
		message: "GET ALL"
	})
})

// GET ONE
router.get('/:id', (req, res, next) => {
	res.json({
		message: "GET ONE"
	})
})

// CREATE
router.post('/', (req, res, next) => {
	res.json({
		message: "CREATE"
	})
})

// UPDATE
router.put('/:id', (req, res, next) => {
	res.json({
		message: "UPDATE"
	})
})

// DELETE
router.delete('/:id', (req, res, next) => {
	res.json({
		message: "DELETE"
	})
})

module.exports = router