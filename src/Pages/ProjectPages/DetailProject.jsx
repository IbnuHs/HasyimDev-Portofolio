import React from "react";
import { projects } from "../../data/projects";
import { useParams } from "react-router";

export const DetailProject = () => {
  const { id } = useParams();
  const project = projects.find(i => id === id);
  console.log(project.thumbnail);
  console.log(id);
  return <section className="min-h-[60vh]">DetailProject</section>;
};
