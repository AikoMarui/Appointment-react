import React from "react";

export const Appointment = ({ custumer }) => (
    <div>{custumer.firstName}</div>

);

export const AppointmentsDayView = ({ appointments }) => (
    <div id="AppointmentsDayView">
        <ol>
            {appointments.map( (Appointment) => (
            <li key={Appointment.startsAt}/> 
            ))}
        </ol>
    </div>
)
=======
);


