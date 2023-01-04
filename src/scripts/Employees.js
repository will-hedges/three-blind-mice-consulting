import { getApplicationState } from "./DataAccess.js";

export const Employees = () => {
    const computers = getApplicationState("computers");
    const employees = getApplicationState("employees");
    return `
        <section id="employees-and-computers">
            <ul id="employees-and-computers__list">
                ${employees
                    .map((employee) => {
                        const employeeComputer = computers.find(
                            (computer) => computer.id === employee.computerId
                        );
                        return `
                            <li class="employee" id="employee--${employee.id}">${employee.firstName} ${employee.lastName} (${employeeComputer.year} ${employeeComputer.model})</li>
                            `;
                    })
                    .join("")}
            </ul>
        </section>
    `;
};
