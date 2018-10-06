const originalTitle = $('#buy .popup__title').html();

$('.programs__button .btn').on('click', (e) => {
  e.preventDefault();
  e.stopPropagation();

  const title = $(e.delegateTarget).data('title');
  $('#buy .popup__title').html(originalTitle + ' "' + title + '"');

  $.magnificPopup.open({ type: 'inline', items: { src: '#buy' } });
  return false;
});