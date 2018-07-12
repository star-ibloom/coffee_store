const login = (data) => {
  return $.ajax({
    url: '/api/users/login',
    type: 'POST',
    contentType: "application/json; charset=utf-8",
    data,
    success: result => result
  })
}

module.exports = { login }