const monk = require('monk')
require('dotenv/config')

const db = monk(process.env.MONGO_URI)
const scores = db.get('scores')

async function getScores() {
	return await scores.find({ })
}

async function getScore(id) {
	return await scores.findOne({ _id: id })
}

async function createScore(score) {
	return await scores.insert(score)
}

async function updateScore(id, score) {
	const document = await getScore(id)
	if (!document) throw new Error(`Error: Document with id '${id}' does not exist.`)
	return await scores.update({ _id: id }, { $set: score })
}

async function deleteScore(id) {
	return await scores.remove({ _id: id })
}

module.exports = { getScores, getScore, createScore, updateScore, deleteScore }