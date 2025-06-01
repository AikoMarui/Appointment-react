import React from "react";
import ReactDOM from "react-dom/client";
import { Appointment, AppointmentsDayView } from "./Appointment";
import { sampleAppointments } from "./SampleData";

ReactDOM.createRoot(
    document.getElementById("root")
).render(
<AppointmentsDayView appointments={sampleAppointments} />
)