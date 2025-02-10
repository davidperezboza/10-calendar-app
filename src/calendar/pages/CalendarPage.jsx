import { useState } from 'react';
import { Calendar } from 'react-big-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours} from 'date-fns';

import { CalendarEvent, NavBar } from "../";
import { localizer, getMessagesES } from '../../helpers/';
import {CalendarModal} from './'
import { useUiStore } from '../../hooks';


const eventos = [{
  title: 'Cumpleaños de jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    id: '123',
    name: 'Fernando',
  },
}];

export const CalendarPage = () => {
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
    console.log({click: event});
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
        events={eventos}
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
