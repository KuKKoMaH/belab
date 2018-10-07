const originalTitle = $('#buy .popup__title').html();
const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegexp = /^\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d$/;

$('.programs__button .btn').on('click', (e) => {
  e.preventDefault();
  e.stopPropagation();

  const $el = $(e.delegateTarget);
  $('#buy .popup__title').html(originalTitle + ' "' + $el.data('title') + '"');
  $('#amount').attr('value', $el.data('amount'));

  $.magnificPopup.open({ type: 'inline', items: { src: '#buy' } });
  return false;
});

$('#payForm').on('submit', function (e) {
  $('#payForm .input__error').html('');
  let hasError = false;
  if (!this.name.value) {
    $('#payName .input__error').html('Введите ваше имя');
    hasError = true;
  }

  if (!emailRegexp.test(this.email.value)) {
    $('#payEmail .input__error').html('Введите ваше email');
    hasError = true;
  }

  if (!phoneRegexp.test(this.phone.value)) {
    $('#payPhone .input__error').html('Введите ваше телефон');
    hasError = true;
  }

  if (!hasError) pay(this);
  return false;
})

//pay(this); return false;