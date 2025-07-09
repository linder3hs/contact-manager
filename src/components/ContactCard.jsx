export default function ContactCard({ contact, toggleFavorite, handleNextContact }) {
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
      {contact ? (
        <>
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
          <div style={{
            display: 'flex',
            gap: 20
          }}>
            <button onClick={() => toggleFavorite(contact.id)}>
              {contact.isFavorite ? "Quitar Favorito" : "Agregar Favorito"}
            </button>
            <button onClick={() => handleNextContact(contact)}>
              Siguiente
            </button>
          </div>
          
        </>
      ) : (
        <p style={{
          textAlign: 'center'
        }}>No hay un contacto seleccionado.</p>
      )}
    </div>
  );
}
