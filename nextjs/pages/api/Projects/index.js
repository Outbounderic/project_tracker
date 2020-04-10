import dbConnect from '../../../utils/dbConnect'
import Project from '../../../models/Project'

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch(method) {
    case 'GET';
      try {
        const projects = await Project.find({})
      } catch (e) {

      } finally {

      }
  }
}
