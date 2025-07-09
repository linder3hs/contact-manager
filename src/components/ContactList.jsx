export function ContactList({
  contactsToShow,
  onSelectContact,
  selectedContact,
}) {
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
              background:
                selectedContact?.id === contact.id ? "#3ada49" : "#2f7cff",
              border: "none",
              padding: "10px 12px",
              color: "#fff",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Contact {contact.id}
          </button>
        </div>
      ))}
    </section>
  );
}
