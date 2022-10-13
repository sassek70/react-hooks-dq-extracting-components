import MessageItem from './MessageItem'



const Messages = (props) => {

    const messageCards = props.messages.map((message) => {
        return ( <MessageItem key={message.id} message={message}/>)
    })

    return (
        <section className="messages">
        <ul>
            {messageCards}
        </ul>
      </section>
    )
}

export default Messages




// {
//     id: 1,
//     type: "sent",
//     name: "Erica",
//     content: "One",
//   },