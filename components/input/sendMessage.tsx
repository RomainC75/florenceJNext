import React, { useState, ChangeEvent, useEffect } from 'react'
import MessageInterface from '../../@types/message.type'
import axios from 'axios'

const defaultMessageInfos: MessageInterface = {
  email: '',
  name: '',
  text: '',
}

const SendMessage = () => {
  const [messageState, setMessageState] =
    useState<MessageInterface>(defaultMessageInfos)
  const [notification, setNotification] = useState<null | string>(null)

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [notification])

  const handleMessage = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setMessageState({
      ...messageState,
      [e.target.name]: e.target.value,
    })
  }

  const sendMessage = () => {
    axios
      .post('/api/message', messageState)
      .then((ans) => {
        setMessageState(defaultMessageInfos)
        console.log('ans.data', ans.data)
        setNotification('envoyé')
      })
      .catch((err) => {
        console.log('err', err)
        setNotification('problème')
      })
    console.log('==>', messageState)
  }

  return (
    <div className="footer__contactSocial__contact">
      <h3>Envoyez moi un message :</h3>
      <div className="footer__contactSocial__contact__container">
        <div className="footer__contactSocial__contact__container__up">
          <input
            id="nameInput"
            type="text"
            placeholder="Nom"
            name="name"
            onChange={handleMessage}
            value={messageState.name}
          />
          <input
            type="email"
            placeholder="Mail"
            name="email"
            onChange={handleMessage}
            value={messageState.email}
          />
        </div>
        <textarea
          placeholder="Text"
          name="text"
          onChange={handleMessage}
          value={messageState.text}
        ></textarea>
        <button onClick={sendMessage}>Envoyer</button>
        {notification && <p>{notification}</p>}
      </div>
    </div>
  )
}

export default SendMessage
