//access all input + submit button
const fullName = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submit = document.querySelector(".btn");
const submitError = document.querySelector(".alert");

//full name validation
function validateFullName() {
  const nameError = fullName.nextElementSibling;   //access span
  const fullNameValue = fullName.value;

  if(fullNameValue.length == 0) {
    nameError.innerHTML = 'name is required';
    return false;
  }
  if(!fullNameValue.match(/^[A-Za-z]+\s+[A-Za-z]+$/)) {
    nameError.innerHTML = 'write full name';
    return false;
  }
  nameError.classList.remove('text-red-500');
  nameError.innerHTML = '<i class="fa-solid fa-circle-check text-green-500"></i> validated'
  return true;
}

fullName.addEventListener("keyup", validateFullName);

//phone number validation
function validatePhoneNumber() {
  const phoneError = phone.nextElementSibling;   //access span
  const phoneValue = phone.value;

  if(phoneValue.length == 0) {
    phoneError.innerHTML = 'phone no. is required';
    return false;
  }
  if(phoneValue.length !== 11) {
    phoneError.innerHTML = 'phone no. should be 11 digits';
    return false;
  }
  if(!phoneValue.match(/[0-9]{11}$/)) {
    phoneError.innerHTML = 'phone no. should be only digits';
    return false;
  }
  phoneError.classList.remove('text-red-500');
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check text-green-500"></i> validated'
  return true;
}

phone.addEventListener("keyup", validatePhoneNumber);

// email validation
function validateEmail() {
  const emailError = email.nextElementSibling;   //access span
  const emailValue = email.value;

  if(emailValue.length == 0) {
    emailError.innerHTML = 'email is required';
    return false;
  }
  if(!emailValue.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
    emailError.innerHTML = 'invalid email';
    return false;
  }
  emailError.classList.remove('text-red-500');
  emailError.innerHTML = '<i class="fa-solid fa-circle-check text-green-500"></i> validated'
  return true;
}

email.addEventListener("keyup", validateEmail);

//message validation
function validateMessage() {
  const messageError = message.nextElementSibling;   //access span
  const messageValue = message.value;
  let requiredChar = 20;
  let needChar = requiredChar - messageValue.length;

  if(needChar > 0) {
    messageError.innerHTML = needChar + ' more characters need';
    return false;
  }

  messageError.classList.remove('text-red-500');
  messageError.innerHTML = '<i class="fa-solid fa-circle-check text-green-500"></i> validated'
  return true;
}

message.addEventListener("keyup", validateMessage);

//validation submit button
function handleSubmit(e) {
  e.preventDefault();

  if(!validateFullName() || !validatePhoneNumber() || !validateEmail() || !validateMessage()) {
    submitError.classList.remove('hidden');
    submitError.style.display = ''; // Reset inline style
    setTimeout(() => {
      submitError.classList.add('hidden');
    }, 2000);
    return false;
  } else {
      Swal.fire({
        title: "Hurrah!",
        text: "Form was Submitted Successfully!",
        icon: "success",
        backdrop: false, 
      });

      // Clear form fields after successfully submit
      fullName.value = '';
      phone.value = '';
      email.value = '';
      message.value = '';
      fullName.nextElementSibling.innerHTML = '';
      phone.nextElementSibling.innerHTML = '';
      email.nextElementSibling.innerHTML = '';
      message.nextElementSibling.innerHTML = '';

      return true;
  }
}

submit.addEventListener("click", handleSubmit);