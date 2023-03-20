// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {itemDetails} = props
  console.log(itemDetails)
  const {courseTitle, description, duration, id, tagsList} = itemDetails

  return (
    <div>
      <h1>{courseTitle}</h1>
      <AiFillClockCircle />
      <p>{duration}</p>
      <p>{description}</p>
      <ul>
        {tagsList.map(each => (
          <li>
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
