import { Schema, model, models } from "mongoose";
const projectsSchema = new Schema(
  {
    title: String,
    description: String,
    imgUrl:String,
    status:String,
    category:String,
    body: String,
  },
  {
    timestamps: true,
  }
);
const ProjectsModel =
  models.projectsModel || model("projectsModel", projectsSchema);
export default ProjectsModel;
