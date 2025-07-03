export default function ContactCard({ contact }) {
  // contact.name = "Linder";
  // contact.email = "linder@gmail.com";
  return (
    <div>
      <h3
        style={{
          textDecoration: "underline",
        }}
      >
        {contact?.name}
      </h3>
      <p>Teléfono: {contact?.phone}</p>
      <p>{contact?.isFavorite ? "⭐" : "☆"}</p>
    </div>
  );
}
