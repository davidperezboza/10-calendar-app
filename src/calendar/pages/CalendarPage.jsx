import { useState } from 'react';
import { Calendar } from 'react-big-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, NavBar } from "../";
import { localizer, getMessagesES } from '../../helpers/';
import {CalendarModal} from './'
import { useCalendarStore, useUiStore } from '../../hooks';

export const CalendarPage = () => {
  const {events, setActiveEvent} = useCalendarStore();
  const {openDateModal} = useUiStore();
  const [lastVievw, setLastVievw] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      boderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };

    return {
      style
    };
  };

  const onDoubleClick = (event) => {
    openDateModal();
  };

  const onSelected = (event) => {
    setActiveEvent(event);
  };

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setLastVievw(event);
  };

  return (
    <>
      <NavBar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastVievw}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelected}
        onView={onViewChanged}
      />

      <CalendarModal />
    </>
  )
}
