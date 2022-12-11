import React, {useState} from 'react'
import moment from 'moment';
import Header from './Header';
import Monitor from './Monitor';
import CalendarGrid from './CalendarGrid';
import styled from 'styled-components';


const ShadowWrapper = styled('div')`
border-top: 1px solid #737374;
border-left: 1px solid #464648;
border-right: 1px solid #464648;
border-bottom: 2px solid #464648;
border-radius: 8px;
overflow:hidden;
box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888;
// display: flex;
// flex-direction: column;
`

function Calendar() {

  //  window.moment = moment;

  moment.updateLocale('en', {week:{dow: 1} })
  // const today = moment()
  const [today, setToday] = useState(moment());

  const startDay = today.clone().startOf('month').startOf('week')
 
 
 const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const todayHandler = () => setToday(moment())
  const nextHandler = () => setToday(prev => prev.clone().add(1, 'month' ));



  return (
    <ShadowWrapper >
      <Header />
      <Monitor 
         today={today}
          prevHandler={prevHandler}
          todayHandler={todayHandler}
          nextHandler={nextHandler}
          // setDisplayMode={setDisplayMode}
          // displayMode={displayMode}
/>
      <CalendarGrid  startDay={startDay}  today={today}/>
    </ShadowWrapper>
  );
}

export default Calendar;
