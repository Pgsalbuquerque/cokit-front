import React from "react";
import Message from "./message"

const Messages = ({messages}) => {
    return (
    <>
        {messages.map((message, index) => {
           if (index === 0) {
                return (<>
                 <Message message = {message}/>
                 <Message message = {{conteudo: "A equipe da cokit agradece seu contato!", date: new Date(), client:false}}/>
                 <Message message = {{conteudo: "Por favor descreva melhor seu problema", date: new Date(), client:false}}/>
                  </>)
           }
           if (index === 1) {
            return (<>
             <Message message = {message}/>
             <Message message = {{conteudo: "Entendemos o seu problema, entraremos em contato com voce em breve", date: new Date(), client:false}}/>
              </>)
       }
           return <Message message = {message}/>
        
        })}
    </>
    )
};

export default Messages;