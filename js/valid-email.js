
function isValidEmail(email) {
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  function validateForm() {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
  
    if (!isValidEmail(emailInput.value)) {
      errorMessage.style.display = 'block';
      return false;
    }
  
    errorMessage.style.display = 'none';
    return true;
  }
  