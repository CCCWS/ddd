import React from "react";
import { ProjectType } from "@Data/ProjectList";

interface Props {
  data: ProjectType;
}

const ProjectDetail = ({ data }: Props) => {
  return <div>{data.title}</div>;
};

export default ProjectDetail;
