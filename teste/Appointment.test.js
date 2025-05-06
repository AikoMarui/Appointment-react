import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils"
import { Appointment } from "../src/Appointment"

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