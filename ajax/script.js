$(document).ready(function() {
      function isValidEmail(email) {
          var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          return regex.test(email);
      }

      $('#contactForm').on('submit', function(event) {
          event.preventDefault();

          $('#responseMessage').empty();
          $('.error-message').remove();
          $('input, textarea').removeClass('input-error');

          var name = $('#name').val().trim();
          var email = $('#email').val().trim();
          var message = $('#message').val().trim();
          var isValid = true;

          if (name === '') {
              $('#name').addClass('input-error');
              $('#name').after('<span class="error-message">Masukkan Username.</span>');
              isValid = false;
          }

          if (email === '') {
              $('#email').addClass('input-error');
              $('#email').after('<span class="error-message">Masukkan Email.</span>');
              isValid = false;
          } else if (!isValidEmail(email)) {
              $('#email').addClass('input-error');
              $('#email').after('<span class="error-message">Masukkan Email yang sesuai.</span>');
              isValid = false;
          }

          if (message === '') {
              $('#message').addClass('input-error');
              $('#message').after('<span class="error-message">Pesan Wajib diisi.</span>');
              isValid = false;
          }

          if (isValid) {
              var formData = $(this).serialize();
              var submitButton = $(this).find('button[type="submit"]');
              var originalButtonHtml = submitButton.html();

              submitButton.html('<i class="fas fa-spinner fa-spin"></i> Mengirim...');
              submitButton.prop('disabled', true);

              $.ajax({
                  type: 'POST',
                  url: 'https://jsonplaceholder.typicode.com/posts',
                  data: formData,
                  dataType: 'json',
                  encode: true
              })
              .done(function(data) {
                  $('#responseMessage').html("<p class='text-success mt-3'>Registrasi Sukses.</p>");
                  $('#contactForm')[0].reset();
              })
              .fail(function(data) {
                  $('#responseMessage').html("<p class='text-danger mt-3'>Terjadi error, Silahkan coba lagi.</p>");
              })
              .always(function() {
                  submitButton.html(originalButtonHtml);
                  submitButton.prop('disabled', false);
              });
          }
      });
  });