/* global data */
/* exported data */
// ---------------------------- ADDING AN ITEM ----------------------------
// querying the DOM
// placeholder image
const $image = document.querySelector('img');
// URL for image
const $photoUrl = document.querySelector('#photo-url');
// contact-form
const $contactForm = document.querySelector('#contact-form');

// function to add a picture to form
$photoUrl.addEventListener('input', function (event) {
  $image.setAttribute('src', event.target.value);
});

// function to add an entry to the database
$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // replacing an entry
  if (data.editing !== null) {
    const updatedEntry = {
      title: $contactForm.elements.title.value,
      photoURL: $contactForm.elements['photo-url'].value,
      notes: $contactForm.elements.notes.value,
      entryId: data.nextEntryId
    };
    const $id = data.editing.entryId;
    data.entries.splice(data.length - $id, 1, updatedEntry);
    // reset data.editing
    data.editing = null;
    const $entriesListUpdated = document.querySelector('ul');
    $entriesListUpdated.innerHTML = '';
    for (let i = 0; i < data.entries.length; i++) {
      // call function to display entry
      var $item = newItem(data.entries[i]);
      // append entry to UL
      $entriesListUpdated.appendChild($item);
    }
  } else {
    // addind an new entry
    // create object
    const entry = {
      title: $contactForm.elements.title.value,
      photoURL: $contactForm.elements['photo-url'].value,
      notes: $contactForm.elements.notes.value,
      entryId: data.nextEntryId
    };
    // add object to array (database)
    data.entries.unshift(entry);
    // increment next entry id
    // call newEntry function with the entry parameter and
    // store it in a variable
    const $item = newItem(entry);
    $uList.prepend($item);
    data.nextEntryId++;
  }

  // reset form
  document.getElementById('contact-form').reset();
  // set image iin the form
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
});
// ---------------------------- DISPLAY ITEMS ----------------------------
// function to display entry
function newItem(entry) {
  // create a new li
  const $listedItem = document.createElement('li');
  $listedItem.setAttribute('class', 'listed-item');

  // create a new div = listed-item
  const $row = document.createElement('div');
  $row.setAttribute('class', 'row');
  // create a new div = column-half
  const $columnHalf1 = document.createElement('div');
  $columnHalf1.setAttribute('class', 'column-half');
  // create a new second div = column-half
  const $columnHalf2 = document.createElement('div');
  $columnHalf2.setAttribute('class', 'column-half');
  // create a div = display-url
  const $displayUrl = document.createElement('div');
  $displayUrl.setAttribute('class', 'display-url');

  // create a div = display-text
  const $displayText1 = document.createElement('div');
  $displayText1.setAttribute('class', 'display-text');
  // create another div = display-text
  const $displayText2 = document.createElement('div');
  $displayText2.setAttribute('class', 'display-text');
  // create a image tag
  const $image = document.createElement('img');
  $image.setAttribute('src', entry.photoURL);
  // create a h3 tag
  const $displayTitle = document.createElement('h3');
  $displayTitle.textContent = entry.title;
  // create another image tag
  const $icon = document.createElement('img');
  // $icon.setAttribute('class', 'pen');
  $icon.setAttribute('src', 'images/edit-icon.png');
  $icon.setAttribute('class', 'pen');
  $icon.setAttribute('data-id', entry.entryId);
  // create a p tag
  const $displayNotes = document.createElement('p');
  $displayNotes.textContent = entry.notes;
  // append everything together to listedItem
  $listedItem.appendChild($row);
  $row.appendChild($columnHalf1);
  $columnHalf1.appendChild($displayUrl);
  $displayUrl.appendChild($image);
  $row.appendChild($columnHalf2);
  $columnHalf2.appendChild($displayText1);
  $displayText1.appendChild($displayTitle);
  $displayTitle.appendChild($icon);
  $columnHalf2.appendChild($displayText2);
  $displayText2.appendChild($displayNotes);
  // return listedItem
  return $listedItem;
}

// querying the DOM for displying entries
const $uList = document.querySelector('ul');
// iterate over data to disply all the entries
for (let i = 0; i < data.entries.length; i++) {
  // call function to display entry
  var $item = newItem(data.entries[i]);
  // append entry to UL
  $uList.appendChild($item);
}

// ---------------------------- NAVIGATION ----------------------------
// querying the DOM to clicking functions
const $newEntry = document.querySelector('#new-entry');
const $entriesView = document.querySelector('#entries-view');
const $entriesList = document.querySelector('.entries-list');

// data-views
const $entryForm = document.querySelector('#entry-form');
const $entries = document.querySelector('#entries');

$entriesList.addEventListener('click', function (event) {
  if (event.target.className !== 'pen') {
    return;
  }
  $entryForm.className = 'view';
  const $h2 = document.querySelector('h2');
  $h2.textContent = 'Edit Entry';
  $entries.className = 'view hidden';

  const $entryNumber = event.target.getAttribute('data-id');
  const $number = parseInt($entryNumber);

  for (let i = 0; i < data.entries.length; i++) {
    if ($number === data.entries[i].entryId) {
      $image.setAttribute('src', data.entries[i].photoURL);
      $contactForm.elements.title.value = data.entries[i].title;
      $contactForm.elements['photo-url'].value = data.entries[i].photoURL;
      $contactForm.elements.notes.value = data.entries[i].notes;
      // make sure entry already exit
      data.editing = data.entries[i];
    }
  }

});

$entriesView.addEventListener('click', function (event) {
  $entries.className = 'view';
  $entryForm.className = 'view hidden';
});

$newEntry.addEventListener('click', function (event) {
  $entryForm.className = 'view';
  const $h2 = document.querySelector('h2');
  $h2.textContent = 'New Entry';
  $entries.className = 'view hidden';
});
