import React from 'react'
import { EnrollWrapper } from './EnrollSessions.styles'
import Cards from '../Cards'
import {enrollSeesion} from '../../Constant/Data';
import nextimg from '../../../assets/sessions/next.png';
import previmg from '../../../assets/sessions/prev.png'
const EnrollSessions = () => {
  return (
    <EnrollWrapper>
         <h4>Enroll for Group Sessions</h4>
         <div className="cardwrap">
{/* <img src={previmg} alt="prev" /> */}
            <Cards data={enrollSeesion} />
            {/* <img src={nextimg} alt="next" /> */}
         </div>
    </EnrollWrapper>
  )
}

export default EnrollSessions