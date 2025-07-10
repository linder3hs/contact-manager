import { useState } from 'react'

export default function ContactForm({ handleAddContact }) {
   const [formData, setFormData] = useState({
      name: '',
      phone: ''
   });

   const handleChangeName = (event) => {
      setFormData({ ...formData, name: event.target.value });
   }

   const handleChangePhone = (event) => {
      setFormData({ ...formData, phone: event.target.value });
   }

   const handleSubmit = (event) => {
      event.preventDefault(); // Evitar que se recargue la pagina
      // Llamar a la función onAddContact para agregar el nuevo contacto
      handleAddContact({
         name: formData.name,
         phone: formData.phone
      })
   }

   return (
      <form onSubmit={handleSubmit} style={{}}>
         <h3>Agregar Nuevo Contacto</h3>

         {/* Input de nombre controlado */}
         <div style={{}}>
            <label>Nombre:</label>
            <input
               type="text"
               name="name"
               value={formData.name}
               onChange={handleChangeName}
               style={{}}
            />
         </div >

         {/* Input de teléfono controlado */}
         <div style={{}}>
            <label>Teléfono:</label>
            <input
               type="text"
               name="phone"
               value={formData.phone}
               onChange={handleChangePhone}
               style={{}}
            />
         </div >

         <button type="submit">Agregar Contacto</button>
      </form >
   );
}
