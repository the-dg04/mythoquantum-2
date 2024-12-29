import { createContext } from "react";

const ProjectContext = createContext({
  activeProjectId: "",
  setActiveProjectId: () => {},
});

export default ProjectContext;
