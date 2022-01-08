export default function EventList({events, deleteEvent}) {
    return (
        events.map((event, index) => (
        <div key={event.id} onClick={() => deleteEvent(event.id)}>
            <h2>{index} - {event.title}</h2>
        </div>
        ))
    )
}
