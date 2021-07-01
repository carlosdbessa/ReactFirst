import React, { useState, useEffect } from "react";
import "./Contacts.css";
import { db } from "../../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Mensagem Enviada");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  db.collection('mail').add({
    to: 'carlbessa1618@gmail.com',
    message: {
      subject: 'Hello from Firebase!',
      html: 'This is an <code>HTML</code> email body.',
    },
  })

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contacte-nos</h1>

      <label>Nome</label>
      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Mensagem</label>
      <textarea
        placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(153, 255, 204) " }}
      >
        Enviar
      </button>
    </form>
  );
};

export default Contact;

 