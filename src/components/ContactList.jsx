export function ContactList({ contactsToShow, onSelectContact }) {
  return (
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
            onClick={() => onSelectContact(contact)}
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
  );
}
