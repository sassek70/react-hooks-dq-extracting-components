import React from "react";
import { messages, contacts } from "../data";
import Contacts from "./Contacts";
import Form from "./Form";
import Messages from "./Messages";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {

  return (
    <div className="app">
      <nav>
        <Contacts contacts={contacts}/>
      </nav>
      <main>
        <h2>Messages</h2>
       <Messages messages={messages}/>
       <Form />
      </main>
    </div>
  );
}

export default App;
