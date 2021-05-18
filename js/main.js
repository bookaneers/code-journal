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
    note: $entryForm.elements.notes.value,
    entryId: data.nextEntryId
  };
  data.entries.unshift(entry);
  data.nextEntryId++;
  document.getElementById('contact-form').reset();
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
});
