
    function togglePassword(inputId, iconId) {
      const input = document.getElementById(inputId);
      const icon  = document.getElementById(iconId);

      if (input.type === 'text') {
        /* text is visible → hide it, show eye-slash */
        input.type = 'password';
        icon.classList.remove('bi-eye');
        icon.classList.add('bi-eye-slash');
      } else {
        /* text is hidden → show it, show eye */
        input.type = 'text';
        icon.classList.remove('bi-eye-slash');
        icon.classList.add('bi-eye');
      }
    }
