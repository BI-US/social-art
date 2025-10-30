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
