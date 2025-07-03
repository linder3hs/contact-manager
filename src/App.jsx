import ContactCard from "./components/ContactCard";
import Header from "./components/Header";

// const estilos = {
//   backgroundColor: "green",
//   fontSize: 30,
// };

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Verdana",
      }}
    >
      <Header />
      {/* <h1 style={estilos}>Contact Manager</h1>
      <p>Mi primera aplicación en React</p>
      <p>{new Date().getDay()}</p> */}
      <main>
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </main>
      <footer>{/* Copyrigth */}</footer>
    </div>
  );
}
