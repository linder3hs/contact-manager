// paso1: importar el hook de React (useState)
import { useState } from "react";
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";
import { ContactList } from "./components/ContactList";
import { Filters } from "./components/Filter";
import { ClearContact } from "./components/ClearContact";

export default function App() {
  // paso2: crear el state
  const [selectedContact, setSelectedContact] = useState(null);

  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

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

  return (
    <div
      style={{
        fontFamily: "Verdana",
      }}
    >
      <Header />
      <main>
        <Filters handleChangeFavorite={handleChangeFavorite} />
        <ClearContact handleClearContact={handleClearContact} />
        <ContactList
          contactsToShow={contactsToShow}
          onSelectContact={handleSelectContact}
        />
        <ContactCard
          contact={selectedContact}
          toggleFavorite={toggleFavorite}
        />
      </main>
      <footer>{/* Copyrigth */}</footer>
    </div>
  );
}
