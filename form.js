  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the form from submitting normally
    alert('Your message has been sent successfully!'); // show pop-up message
  });
