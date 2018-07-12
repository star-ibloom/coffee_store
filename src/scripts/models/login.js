const login = (data) => {
  return $.ajax({
    url: '/api/users/login',
    type: 'get',
    data,
    success: result => result
  })
}

module.exports = { login }