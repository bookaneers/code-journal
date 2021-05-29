/* global data */
/* exported data */

var $image = document.querySelector('img');
var $photoUrl = document.querySelector('#photo-url');
var $entryForm = document.querySelector('#contact-form');
$photoUrl.addEventListener('input', function (event) {
  $image.setAttribute('src', event.target.value);
});

$entryForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var entry = {
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

var test = {
  title: 'This is an example title',
  photoURL: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  notes: 'This is an example of notes'
};

function newItem(entry) {

  var $listedItem = document.createElement('li');
  $listedItem.setAttribute('class', 'listed-item');

  var $row = document.createElement('div');
  $row.setAttribute('class', 'row');

  var $columnHalf = document.createElement('div');
  $columnHalf.setAttribute('class', 'column-half');

  var $displayUrl = document.createElement('div');
  $displayUrl.setAttribute('class', 'display-url');

  var $image = document.createElement('img');
  $image.setAttribute('src', entry.photoURL);

  var $displayTitle = document.createElement('h3');
  $displayTitle.textContent = entry.title;

  var $displayNotes = document.createElement('p');
  $displayNotes.textContent = entry.notes;

  $listedItem.appendChild($row);
  $row.appendChild($columnHalf);
  $columnHalf.appendChild($displayUrl);
  $displayUrl.appendChild($image);
  $columnHalf.appendChild($displayTitle);
  $columnHalf.appendChild($displayNotes);

  return $listedItem;
}
var $uList = document.querySelector('ul');
var $item = newItem(test);
$uList.appendChild($item);

// var $uList = document.querySelector('ul');
for (let i = 0; i < data.entries.length; i++) {
  $item = newItem(data.entries[i]);
  $uList.appendChild($item);
}
