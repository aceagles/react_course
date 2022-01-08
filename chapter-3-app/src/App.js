import './App.css';
import Modal from './components/Modal'
import EventList from './components/EventList'
import {useState} from 'react'

function App() {
  let [show_modal, setShow] = useState(false) 
  let [show_events, set_show_events] = useState(true) 
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])


  function delete_event(id) {
    setEvents(prevEvents => prevEvents.filter(event => id !== event.id))
  }

  function toggleModal(val) {
    console.log(val)
    setShow(val)
  }


  return (
    <div className="App">
      <input type="button" value="Show Modal" onClick={() => toggleModal(true)}/>
      {show_modal && <Modal closeModal={() => toggleModal(false)}>
        <h1>This is the modal!</h1>
        </Modal>}
      <br />
      Go on then.
      <br />
      <button onClick={() => {set_show_events(prev => !prev)}}>Toggle Events</button>
     { show_events && <EventList events={events} deleteEvent={delete_event}/>}
    </div>
  );
}

export default App;
