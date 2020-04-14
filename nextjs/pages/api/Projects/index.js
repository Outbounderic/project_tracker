import dbConnect from '../../../utils/dbConnect'
import Project from '../../../models/Project'

dbConnect();

export default async (req, res) => {
  const { method } = req;
  console.log(method);
  console.log(req.body);
  switch (method) {
    case 'GET':
      try {
        const projects = await Project.find({});

        res.status(200).json({ success: true, data: projects });
      } catch (error) {
        res.status(400).json({ success: false, method: "get unknown"});
      }
      break;
    case 'POST':
      try {
        const project = await Project.create(req.body);
        console.log(project);
        res.status(201).json({ success: true});
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false});
      }
      break;
    default:
    res.status(400).json({ success: false});
    break;
  }
}

// clean up method/body
