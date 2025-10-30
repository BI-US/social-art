# social-art

-----

 **hacer una base mínima funcional para EUFORY**
 
 solo para ponerla en marcha, que puedas mostrar en tu perfil o CV y pedir permiso sin complicarte con tanto detalle:

---

## **1️⃣ Estructura mínima – EUFORY**

### **Archivos**

1. `index.html` → Lista de obras y fechas.
2. `styles.css` → Diseño simple y limpio.
3. `scripts.js` → Interactividad mínima (mostrar descripción, reservar o contactar).
4. `data.json` → Lista de obras con info básica.

---

### **2️⃣ Ejemplo `data.json`**

```json
[
  {
    "title": "La Hada y el Bosque",
    "date": "2025-11-15",
    "time": "19:00",
    "venue": "Teatro Central",
    "description": "Una aventura mágica en un bosque encantado.",
    "image": "images/hada_bosque.jpg",
    "tickets_url": "#"
  },
  {
    "title": "El Hechizo de la Luna",
    "date": "2025-11-22",
    "time": "20:00",
    "venue": "Sala EUFORY",
    "description": "Drama y comedia en un hechizo inolvidable.",
    "image": "images/hechizo_luna.jpg",
    "tickets_url": "#"
  }
]
```

---

### **3️⃣ Ejemplo `index.html`**

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>EUFORY Obras de Teatro</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<h1>EUFORY – Obras de Teatro</h1>
<div id="shows"></div>

<script src="scripts.js"></script>
</body>
</html>
```

---

### **4️⃣ Ejemplo `scripts.js`**

```js
fetch('data.json')
  .then(res => res.json())
  .then(shows => {
    const container = document.getElementById('shows');
    shows.forEach(show => {
      const div = document.createElement('div');
      div.className = "show";
      div.innerHTML = `
        <h2>${show.title}</h2>
        <p><strong>Fecha:</strong> ${show.date} <strong>Hora:</strong> ${show.time}</p>
        <p><strong>Lugar:</strong> ${show.venue}</p>
        <p>${show.description}</p>
        <a href="${show.tickets_url}" target="_blank">Reservar / Contactar</a>
        <hr>
      `;
      container.appendChild(div);
    });
  });
```

---

### **5️⃣ `styles.css` mínimo**

```css
body { font-family: sans-serif; margin: 20px; }
h1 { text-align: center; }
.show { margin-bottom: 20px; padding: 10px; border: 1px solid #ccc; border-radius: 8px; }
a { color: blue; text-decoration: none; }
```

---

✅ **Lo que tienes con esto**

* Una página **funcional** que lista las obras.
* Fácil de mostrar en tu perfil o enviar a tu mamá/compañía para pedir permiso.
* Base lista para expandir cuando quieras agregar imágenes reales, tickets o formularios.

---

Si quieres, puedo **armarte un ZIP listo para copiar, con esta base mínima**, y así lo subes al perfil o GitHub sin perder tiempo.

¿Quieres que haga eso?
