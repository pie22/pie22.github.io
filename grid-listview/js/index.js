$('.btn-gallery').on('click', function() {
  $('.products').removeClass('list').addClass('gallery');
  $('.btn-list').removeClass('active');
  $(this).addClass('active');
});

$('.btn-list').on('click', function() {
  $('.products').removeClass('gallery').addClass('list');
  $('.btn-gallery').removeClass('active');
  $(this).addClass('active');
});