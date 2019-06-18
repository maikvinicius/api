const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  title: String,
  data: String,
  content: String,
})

commentSchema.statics.publicData = function (data) {
  let out = {
    id: data._id,
    title: data.title,
    data: data.data,
    content: data.content,
  }

  return out;
}


const Sonhos = mongoose.model('Sonhos', commentSchema);

module.exports = Sonhos
