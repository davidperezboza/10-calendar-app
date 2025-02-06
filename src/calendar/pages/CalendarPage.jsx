import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours} from 'date-fns';

import { NavBar } from "../";
import { localizer, getMessagesES } from '../../helpers/';

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
  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log({event, start, end, isSelected});

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

  return (
    <>
      <NavBar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={eventos}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
      />
    </>
  )
}
