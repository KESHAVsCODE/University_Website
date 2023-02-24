  const submitBtn = document.querySelector(".submit-btn");
  const myForm = document.querySelector(".comment-form");
  submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    alert('Your message has been sent successfully!');
    if(myForm == null){
      consol.log("NO");
    }
    else
        consol.log("YES");
    myForm.reset();
  });
