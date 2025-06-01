import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react"
import { Appointment, AppointmentsDayView } from "../src/Appointment"

describe("Appointment", () => {
    let container;
    beforeEach(() => {
        container = document.createElement("div");

        document.body.replaceChildren(container);
    });

    const render = component =>
        act(() => {
        ReactDOM.createRoot(container).render(component);
    });

    it("renders the custumer firt name", () => {
        const custumer = {firstName: "Rodolfo",};
        render(<Appointment custumer={custumer} />)
        
        expect(document.body.textContent).toContain("Rodolfo");
    });

    it("renders another custumer first name", () => {
        
        const custumer = {firstName: "jaquile",};
        render(<Appointment custumer={custumer} />)

        expect(document.body.textContent).toContain("jaquile");

    });
});

describe("AppointmentsDayView", () => {
    let container;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.replaceChildren(container);
    });
    const render = (component) => 
    act(() => {
        ReactDOM.createRoot(container).render(component);
    });

    it("renders a div with the right id", () => {
        render(<AppointmentsDayView appointments={[]} />);


        expect(document.querySelector("div#AppointmentsDayView")).not.toBeNull();
    });

    it("renders an ol element to display appoiments", () => {
       render(<AppointmentsDayView appointments={[]} />);


        const listElement = document.querySelector("ol");
        expect(listElement).not.toBeNull();
    });

    it("render an li for each appoinment", () => {
        const today = new Date();
        const twoAppoiments = [
            { startAt: today.setHours(12, 0) },
            { startAt: today.setHours(13, 0) },
        ];

      render(<AppointmentsDayView appointments={twoAppoiments} />);
      const listChildren = document.querySelectorAll("ol > li");
      expect(listChildren).toHaveLength(2);
    })
});