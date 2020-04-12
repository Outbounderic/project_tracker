import dbConnect from '../../utils/dbConnect'
import Project from '../../models/Project'

dbConnect()

export default async (req, res) => {
  var temp = new Project({ name: "Eric"});

  var returnVal = temp.save(function (err) {
    if (err) {
      return "I have failed"
    }
  })
  res.json({ returnVal })
}
