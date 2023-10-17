import { v4 as uuidv4 } from 'uuid';
import DevProjectThumbnail from "../../components/DevProjectThumbnail/DevProjectThumbnail";
import style from "./dev-projects-styles.module.scss";
import { devProjects } from "../../constants";

const DevProjects = () => {

    return (
        <div className={style['container']}>
            <div className={style['project-board']}>
              {devProjects.map((project) => (
                <DevProjectThumbnail 
                  key={uuidv4()}
                  name={project.projectName}
                  image={project.projectImageUrl}
                  type={project.projectType}
                  link={project.repositoryUrl}
                  description={project.description}
                />
              ))}
            </div> 
        </div>
    )
}

export default DevProjects;

