// Dev App - Remote Development Application
// app.js

document.addEventListener('DOMContentLoaded', () => {
  initNotes();
  initMemberList();
});

// ---- Shared Notes (localStorage) ----
function initNotes() {
  const notesEl = document.getElementById('notes');
  const saveBtn = document.getElementById('saveBtn');
  const saveMsg = document.getElementById('saveMsg');

  if (!notesEl || !saveBtn) return;

  // Load saved notes
  const saved = localStorage.getItem('devapp-notes');
  if (saved) notesEl.value = saved;

  saveBtn.addEventListener('click', () => {
    localStorage.setItem('devapp-notes', notesEl.value);
    saveMsg.textContent = 'Notes saved!';
    setTimeout(() => { saveMsg.textContent = ''; }, 2000);
  });

  // Auto-save on change
  notesEl.addEventListener('input', () => {
    localStorage.setItem('devapp-notes', notesEl.value);
  });
}

// ---- Team Members List ----
function initMemberList() {
  const list = document.getElementById('memberList');
  if (!list) return;

  // Simulated remote members (in a real app, replace with WebSocket or API)
  const members = [
    { name: 'You (local)', status: 'online' },
    { name: 'Collaborator A', status: 'online' },
    { name: 'Collaborator B', status: 'away' },
  ];

  list.innerHTML = '';
  members.forEach(m => {
    const li = document.createElement('li');
    const dot = m.status === 'online' ? '\u{1F7E2}' : '\u{1F7E1}';
    li.textContent = `${dot} ${m.name}`;
    list.appendChild(li);
  });
}
