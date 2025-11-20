
/* Script to handle registration simulation and modal quick-register */
function registerPlayer(){
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value;
  const category = document.getElementById('category').value;
  const club = document.getElementById('club').value;

  const player = { name, age, category, club, timestamp: new Date().toISOString() };
  console.log('Jugador registrado:', player);

  // Append to table
  const tbody = document.querySelector('#playersTable tbody');
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${escapeHtml(name)}</td><td>${escapeHtml(age)}</td><td>${escapeHtml(category)}</td><td>${escapeHtml(club)}</td>`;
  tbody.appendChild(tr);

  // clear form
  document.getElementById('playerForm').reset();
}

// Simple modal quick register for demonstration
function registerFromModal(){
  const name = document.getElementById('modalName').value.trim();
  const email = document.getElementById('modalEmail').value.trim();
  const club = document.getElementById('modalClub').value.trim();
  const data = { name, email, club, ts: new Date().toISOString() };
  console.log('Registro modal:', data);
  // show feedback and close modal
  const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
  modal.hide();
  alert('Registro recibido (simulado). Revisa la consola para los datos.');
}

// small helper to avoid XSS in table display
function escapeHtml(unsafe) {
    return unsafe
         .replaceAll('&', '&amp;')
         .replaceAll('<', '&lt;')
         .replaceAll('>', '&gt;')
         .replaceAll('"', '&quot;')
         .replaceAll("'", '&#039;');
}
