// paso1: importar el hook de React (useState)
import { useState } from "react";
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";

export default function App() {
  // paso2: crear el state
  const [selectedContact, setSelectedContact] = useState(null);

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

  const handleSelectContact = (contact) => {
    console.log({ contact });
    setSelectedContact(contact);
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
            display: "flex",
            gap: 20,
            justifyContent: "center",
          }}
        >
          {contacts.map((contact) => (
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
                Contact {contact.id}
              </button>
            </div>
          ))}
        </section>

        {selectedContact ? <ContactCard contact={selectedContact} /> : null}
      </main>
      <footer>{/* Copyrigth */}</footer>
    </div>
  );
}
