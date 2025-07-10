# Capturar un formulario en React

## Paso 01. Crear un formulario

```jsx
   <form>
      <label htmlFor="">Nombre</label>
      <input type="text" />
      <button>Agregar Contacto</button>
   </form>
```

## Paso 02. Crear un estado con useState

```jsx
   const [nameContact, setNameContact] = useState("");
```

## Paso 03. Asociar el estado al input y agregar el onChange

```jsx
   <input 
      type="text" 
      value={nameContact}
      onChange={(event) => setNameContact(event.target.value)}
   />
```

## Paso 04. Opcional: Migrar la funcion anonima a una funcion flecha

```jsx
   const handleChangeNameContact = (event) => {
      setNameContact(event.target.value);
   }
```

---

# Como evitar que se recargue el formulario

## Paso 01. Agregar el evento onSubmit al formulario

```jsx
   <form onSubmit={handleSubmit}>
```

## Paso 02. Crear la funcion handleSubmit

```jsx
   const handleSubmit = (event) => {
      event.preventDefault();
      // Lógica para agregar el contacto
   }
```