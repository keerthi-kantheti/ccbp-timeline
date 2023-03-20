// Write your code here
import {Component} from 'react'

import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'

import CourseTimelineCard from '../CourseTimelineCard'

class TimeLineView extends Component {
  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="bg-container">
        <div className="chrono-container">
          <h1 className="heading">MY JOURNEY OF CCBP 4.0</h1>
          <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
            {timelineItemsList.map(each => {
              if (each.categoryId === 'COURSE') {
                return <CourseTimelineCard itemDetails={each} key={each.id} />
              }
              return <ProjectTimelineCard itemDetails={each} key={each.id} />
            })}
          </Chrono>
        </div>
      </div>
    )
  }
}
export default TimeLineView
