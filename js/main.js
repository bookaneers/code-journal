/* global data */
/* exported data */

var $image = document.querySelector('img');

var $photoUrl = document.querySelector('#photo-url');
$photoUrl.addEventListener('input', function (event) {
  $image.setAttribute('src', event.target.value);
});
