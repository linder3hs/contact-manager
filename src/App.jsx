// paso1: importar el hook de React (useState)
import { useState } from "react";
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";

export default function App() {
  // paso2: crear el state
  const [selectedContact, setSelectedContact] = useState({
    id: 1,
    name: "Juan Perez",
    phone: "+51 989222111",
    isFavorite: true,
  });

  const valorQueNoCambia = "Enter Tech School";

  return (
    <div
      style={{
        fontFamily: "Verdana",
      }}
    >
      <Header />
      <p>{valorQueNoCambia}</p>
      <p>{JSON.stringify(selectedContact)}</p>

      <main>
        <ContactCard contact={selectedContact} />
      </main>
      <footer>{/* Copyrigth */}</footer>
    </div>
  );
}
