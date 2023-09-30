function buildCalendar() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    // Atualiza o texto do elemento com o nome do mês atual
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("current-month").textContent = monthNames[month];

    const calendar = document.getElementById("calendar");
    calendar.innerHTML = `
        <table class="calendar-table">
            <thead>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    `;

    const calendarTable = calendar.querySelector("tbody");

    // Find the first day of the month and the last day of the month
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Create the calendar for the current month
    let date = new Date(firstDayOfMonth);

    // Fill in any empty spaces at the beginning of the calendar, if any
    let tableRow = "<tr>";
    for (let i = 0; i < date.getDay(); i++) {
        tableRow += "<td></td>";
    }

    while (date <= lastDayOfMonth) {
        const day = date.getDate();
        const isToday = date.toDateString() === today.toDateString();

        // Add a class to highlight the current day
        const highlightClass = isToday ? "current-day" : "";

        tableRow += `<td class="${highlightClass}">${day}</td>`;

        if (date.getDay() === 6) {
            // End of the week; close the table row
            tableRow += "</tr>";
            calendarTable.innerHTML += tableRow;
            // Start a new row
            tableRow = "<tr>";
        }

        // Move to the next day
        date.setDate(day + 1);
    }

    // Close the last table row, if needed
    if (date.getDay() !== 0) {
        while (date.getDay() !== 0) {
            tableRow += "<td></td>";
            date.setDate(date.getDate() + 1);
        }
        tableRow += "</tr>";
        calendarTable.innerHTML += tableRow;
    }
}

buildCalendar();
