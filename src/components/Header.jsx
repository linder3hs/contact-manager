export default function Header({ contacts }) {
  return (
    <header>
      <h1>📞 Contact Manager</h1>
      <p>Mis contactos importantes</p>
      <p>
        Cantidad de contactos favoritos{" "}
        {contacts.filter((contact) => contact.isFavorite).length}
      </p>
    </header>
  );
}
