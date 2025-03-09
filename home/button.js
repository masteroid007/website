document.addEventListener('DOMContentLoaded', function() {
  var contactButton = document.getElementById('01');
  if (contactButton) {
    contactButton.addEventListener('click', function() {
      window.location.href = 'mailto:mattia@masterwork.me';
    });
  }
});
