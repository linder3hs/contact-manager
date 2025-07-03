// paso1: importar el hook de React (useState)
import { useState } from "react";
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";

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
    console.log({ contact });
    setSelectedContact(contact);
  };

  const handleChangeFavorite = (event) => {
    console.log(event);
    setShowOnlyFavorites(event.target.checked);
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
        <section
          style={{
            marginTop: 40,
            marginBottom: 40,
          }}
        >
          <label htmlFor="">
            <h3>Filtros</h3>
            <input type="checkbox" onChange={handleChangeFavorite} />
            Mostrar Favoritos
          </label>
        </section>
        <section
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
          }}
        >
          {contactsToShow.map((contact) => (
            <div key={contact.id}>
              <button
                onClick={() => handleSelectContact(contact)}
                style={{
                  background: "#2f7cff",
                  border: "none",
                  padding: "10px 12px",
                  color: "#fff",
                  borderRadius: 8,
                }}
              >
                Contact {contact.id} {contact.isFavorite ? "True" : "False"}
              </button>
            </div>
          ))}
        </section>

        {selectedContact ? (
          <ContactCard
            contact={selectedContact}
            toggleFavorite={toggleFavorite}
          />
        ) : null}
      </main>
      <footer>{/* Copyrigth */}</footer>
    </div>
  );
}
