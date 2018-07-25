let self = {};

const cheeseArray = [{
  url: '/images/beechers-reserve.jpg',
  product: 'Queso cheddar Beecher\'s Reserve',
  price: 1200
},
{
  url: '/images/brunet.jpg',
  product: 'Queso de cabra Brunet',
  price: 1050
},
{
  url: '/images/Gleann-oir.jpg',
  product: 'Queso irlandés Gleann Oir',
  price: 990
},
{
  url: '/images/midnight-moon.jpg',
  product: 'Queso gouda Midnight Moon',
  price: 1250
},
{
  url: '/images/brebirousse-d-argental.jpg',
  product: 'Queso de oveja Brebirousse d\'Argental',
  price: 1300
},
{
  url: '/images/camembert-le-chatelain.jpg',
  product: 'Queso camembert Le Chatelain',
  price: 950
},
{
  url: '/images/frommager-dafinois.jpg',
  product: 'Queso blando de vaca Frommager d\'Afinois',
  price: 880
},
{
  url: '/images/istara-ossau-iraty.jpg',
  product: 'Queso de oveja Istara Ossau-Iraty',
  price: 1100
},
{
  url: '/images/prima-donna.jpg',
  product: 'Queso Prima-Donna (mezcla de parmesano y holandés)',
  price: 990
},
{
  url: '/images/Saint-Nectaire.jpg',
  product: 'Queso de vaca Saint-Nectaire',
  price: 1300
}]

self.getProducts = function () {
  return cheeseArray;
}

self.addProducts = function (data) {
  const newObj = {
    url: data.url,
    product: data.product,
    price: data.price
  }
  cheeseArray.unshift(newObj)
  return cheeseArray;
}

module.exports = self;