import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className='lg:flex justify-center md:justify-center sm:justify-center py-8'>
            <div>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
                <p>You have selected {format(date, 'PP')}</p>
            </div>
        </div>
    );
};

export default Calendar;