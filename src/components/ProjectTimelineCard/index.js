// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {itemDetails} = props
  console.log(itemDetails)
  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,

    id,
  } = itemDetails

  return (
    <div>
      <img src={imageUrl} alt="project" />
      <h1>{projectTitle}</h1>
      <AiFillCalendar />
      <p>{duration}</p>
      <p>{description}</p>
      <a rel="noreferrer" href={projectUrl} target="_blank">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
