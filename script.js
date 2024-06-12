// script.js

document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('note-input');
    const addNoteButton = document.getElementById('add-note');
    const notesList = document.getElementById('notes-list');

    const loadNotes = () => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesList.innerHTML = '';
        notes.forEach((note, index) => {
            const noteItem = document.createElement('li');
            noteItem.innerHTML = `
                <span>${note}</span>
                <button onclick="deleteNote(${index})">Delete</button>
            `;
            notesList.appendChild(noteItem);
        });
    };

    const addNote = () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push(noteText);
            localStorage.setItem('notes', JSON.stringify(notes));
            noteInput.value = '';
            loadNotes();
        }
    };

    window.deleteNote = (index) => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
    };

    addNoteButton.addEventListener('click', addNote);
    loadNotes();
});
