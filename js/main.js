/* global data */
const $image = document.querySelector('img');
const $photoUrl = document.querySelector('#photo-url');
const $entryForm = document.querySelector('#contact-form');
$photoUrl.addEventListener('input', function (event) {
  $image.setAttribute('src', event.target.value);
});

/* exported data */
$entryForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const entry = {
    title: $entryForm.elements.title.value,
    photoURL: $entryForm.elements['photo-url'].value,
    notes: $entryForm.elements.notes.value,
    entryId: data.nextEntryId

  };
  data.entries.unshift(entry);
  data.nextEntryId++;
  document.getElementById('contact-form').reset();
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');

});

// const $displayTitle = document.createElement('h3');
// const $displayUrl = document.createElement('img');
// const $displayNotes = document.createElement('p');

// window.addEventListener('DOMContentLoaded', function (event) {

//   console.log('DOM fully loaded and parsed');
//   console.log(data.entries);
//   for (let i = 0; i < data.entries.length; i++) {
//     console.log(data.entries[i]);
//     $displayTitle.append(data.entries[i].title);
//     $displayUrl.append(data.entries[i].photoURL);
//     $displayNotes.append(data.entries[i].notes);
//   }
// });

// console.log(data);
