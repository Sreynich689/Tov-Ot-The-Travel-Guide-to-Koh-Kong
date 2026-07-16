
const inputs = document.querySelectorAll('.otp-input');
    inputs.forEach((input, i) => {
      input.addEventListener('input', () => {
        if (input.value.length === 1 && i < inputs.length - 1) {
          inputs[i + 1].focus();
        }
      });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '' && i > 0) {
          inputs[i - 1].focus();
        }
      });
    });