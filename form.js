  const submitBtn = document.querySelector(".submit-btn");
  const myForm = document.querySelector(".contact-form");
  submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Your message has been sent successfully!');
    myForm.reset();
  });
