$('a.btnDelete').click(function (e) {
  e.preventDefault()
  const url = $(this).attr('href')

  $.ajax({
    type: 'delete',
    url: url
  }).done(function () {
    window.location.reload()
  })
})

$('a.btnDone').click(function (e) {
  e.preventDefault()
  const url = $(this).attr('href')

  $.ajax({
    type: 'PUT',
    data: `done=true`,
    url: url
  }).done(function (result) {
    window.location.reload()
  })
})
