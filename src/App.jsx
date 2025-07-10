// paso1: importar el hook de React (useState)
import { useState } from "react";
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";
import { ContactList } from "./components/ContactList";
import { Filters } from "./components/Filter";
import { ClearContact } from "./components/ClearContact";
import "./index.css"

export default function App() {
  // paso2: crear el state
  const [selectedContact, setSelectedContact] = useState(null);

  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const [nameContact, setNameContact] = useState("");

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Juan Perez",
      phone: "+51 989222111",
      isFavorite: true,
    },
    {
      id: 2,
      name: "Pepe Reyes",
      phone: "+34 989121111 ",
      isFavorite: false,
    },
    {
      id: 3,
      name: "Lucas Zapata",
      phone: "+51 912312312",
      isFavorite: false,
    },
  ]);

  let contactsToShow = contacts;

  if (showOnlyFavorites) {
    contactsToShow = contacts.filter((contact) => contact.isFavorite);
  }

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  const handleChangeFavorite = (event) => {
    setShowOnlyFavorites(event.target.checked);
  };

  const handleClearContact = () => {
    setSelectedContact(null);
  };

  const handleNextContact = (selectedContact) => {
    const currentIndex = contactsToShow.findIndex(
      (contact) => contact.id === selectedContact.id
    );

    if (currentIndex === contactsToShow.length - 1) {
      setSelectedContact(contactsToShow[0]);
      return;
    }

    setSelectedContact(contactsToShow[currentIndex + 1])
  };

  const toggleFavorite = (id) => {
    const updatedContacts = contacts.map((contact) => {
      return {
        id: contact.id,
        name: contact.name,
        phone: contact.phone,
        isFavorite:
          contact.id === id ? !contact.isFavorite : contact.isFavorite,
      };
    });

    if (selectedContact.id === id) {
      setSelectedContact({
        id: selectedContact.id,
        name: selectedContact.name,
        phone: selectedContact.phone,
        isFavorite: !selectedContact.isFavorite,
      });
    }

    setContacts(updatedContacts);
  };

  const handleChangeContact = (event) => {
    setNameContact(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que se recargue la página
    // Aqui viene la logica para agregar un nuevo contacto
    // contacts.push({
    //   id: contacts.length + 1,
    //   name: nameContact,
    //   isFavorite: false,
    //   phone: "+51 999999999",
    // })
    /* Insertar Usando el spread operator */
    setContacts([...contacts, {
      id: contacts.length + 1,
      name: nameContact,
      isFavorite: false,
      phone: "+51 999999999",
    }])
    console.log(contacts);
  }

  return (
    <div
      style={{
        fontFamily: "Verdana",
      }}
    >
      <Header contacts={contacts} />
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            value={nameContact}
            onChange={handleChangeContact}
          />
          <p>El valor de mi variable {nameContact}</p>
          <button type="submit">Agregar Contacto</button>
        </form>
        <Filters handleChangeFavorite={handleChangeFavorite} />
        <ClearContact handleClearContact={handleClearContact} />
        <ContactList
          contactsToShow={contactsToShow}
          onSelectContact={handleSelectContact}
          selectedContact={selectedContact}
        />
        <ContactCard
          contact={selectedContact}
          toggleFavorite={toggleFavorite}
          handleNextContact={handleNextContact}
        />
      </main>
      <footer>{/* Copyrigth */}</footer>
    </div>
  );
}
