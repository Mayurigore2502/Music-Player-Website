// Dummy data for initial testing
const dummyEvents = [
    { name: 'Conference', date: '2023-04-15' },
    { name: 'Workshop', date: '2023-05-20' },
];

document.addEventListener('DOMContentLoaded', function () {
    // Display initial events
    displayEvents(dummyEvents);
});

function createEvent() {
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;

    // Validate inputs
    if (!eventName || !eventDate) {
        alert('Please fill in all fields.');
        return;
    }

    // Add the new event
    const newEvent = { name: eventName, date: eventDate };
    dummyEvents.push(newEvent);

    // Update the UI
    displayEvents(dummyEvents);

    // Clear the form
    document.getElementById('eventName').value = '';
    document.getElementById('eventDate').value = '';
}
function displayEvents(events) {
    const eventsList = document.getElementById('events');
    eventsList.innerHTML = '';

    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.name} - ${event.date}`;
        eventsList.appendChild(listItem);
    });
}
