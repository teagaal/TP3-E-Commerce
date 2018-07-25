//Agregar productos al Carrito
const cartSummary = $('.cart-summary');
const totalSum = $('.total')
let total = 0;

$('.add-item').on('click', function () {
  const productTitle = $(this).siblings('.product').html();
  const productCurrency = $(this).siblings('.currency').html();
  const productPrice = $(this).siblings('.price').html();
  const inCart = `<div>${productTitle} ${productCurrency}${productPrice}</div>`

  cartSummary.append(inCart);

  let precio = parseInt(productPrice)
  total += precio;
  totalSum.html('');
  totalSum.append(total);

})

//Iniciar sesión
$('#send-data').on('click', function () {
  const user = $('#username').val();
  const pass = $('#password').val();

  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/',
    data: {
      user: user,
      pass: pass
    }
  }).done(function (data) {
    console.log(data);
    if (data.data == true) {
      window.location.href = 'http://localhost:3000/agregar'
    }
    else {
      const userLogin = $('.login');
      const error = `<div>El nombre de usuario o la contraseña son incorrectos</div>`;
      userLogin.append(error);
    }
  })
  $('#username').val('');
  $('#password').val('');
})

//Subir productos nuevos
$('#upload').on('click', function () {
  const url = $('#imageUrl').val();
  const product = $('#itemTitle').val();
  const price = $('#itemPrice').val();
  console.log(url, product, price);

  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/agregar',
    data: {
      url: url,
      product: product,
      price: price
    }
  }).done(function (data) {

  })
  $('#imageUrl').val('');
  $('#itemTitle').val('');
  $('#itemPrice').val('');
})

//Cerrar sesión
$('#logout').on('click', function () {
  $.ajax({
    method: 'PUT',
    url: 'http://localhost:3000/logout'
  }).done(function (data) {
    window.location.href = 'http://localhost:3000/'
  })
})
