export default function ContactCard({ contact, toggleFavorite }) {
  // contact.name = "Linder";
  // contact.email = "linder@gmail.com";
  return (
    <div
      style={{
        background: "#f7f7f7",
        padding: 12,
        marginTop: 40,
        borderRadius: 12,
        marginInline: 20,
      }}
    >
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        {contact?.name}
        <span>{contact?.isFavorite ? "⭐" : "☆"}</span>
      </h3>
      <p>Teléfono: {contact?.phone}</p>
      <button onClick={() => toggleFavorite(contact.id)}>
        {contact.isFavorite ? "Quitar Favorito" : "Agregar Favorito"}
      </button>
    </div>
  );
}
