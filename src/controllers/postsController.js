const { Sonhos } = require('../models')

exports.list = (req, res, next) => {
	Sonhos.find({}).populate('sonhos').then(function (data) {
		const promises = data.map(data => {
			return Sonhos.publicData(data)
		})
		return Promise.all(promises).then(data => {
			res.send({
				success: true,
				sonhos: data
			})
		})
	})
}

exports.create = (req, res, next) => {
	const data = Object.assign({ title: '', data: '', content: '' }, req.body)
	var post = new Sonhos(data)
	post.save().then(function () {
		res.send({
			success: true,
			message: "Sonho criado com sucesso"
		})
	})
}
