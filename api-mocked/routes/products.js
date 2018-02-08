const express = require( 'express' )
const router = express.Router()

const Charlatan = require( 'charlatan' )
Charlatan.setLocale( 'pt-BR' )

const CATEGORIES = [
  'category1',
  'category2',
  'category3',
  'category4',
  'category5'
]

const getRandomInt = ( min, max ) => {
  min = Math.ceil( min )
  max = Math.floor( max )
  return Math.floor( Math.random() * ( max - min ) ) + min
}

const getPrice = () => Charlatan.Commerce.price()
const getProductName = () => Charlatan.Commerce.productName()
const getLogo = () => Charlatan.Company.logo()
const getCategory = () => CATEGORIES[ getRandomInt( 0, 5 ) ]
const getDescription = () => Charlatan.Company.catchPhrase()

const getRandomProduct = ( product, i ) => ( {
  id: i + 1,
  name: getProductName(),
  price: getPrice(),
  category: getCategory(),
  description: getDescription(),
  logo: getLogo()
} )

const QNTD_PRODUCTS = 120
const PRODUCTS_PER_PAGE = 8

const getProducts = () => Array( QNTD_PRODUCTS ).fill( 0 ).map( getRandomProduct )

// console.log( '------------------------------------' )
// console.log( 'getProducts: ', getProducts() )
// console.log( '------------------------------------' )

// router.get( '/', function ( req, res, next ) {
//   res.json( getProducts() )
// } )


router.get('/:page?', function (req, res, next) {
  const page = (!req.params.page) ? 1 : Number(req.params.page)
  console.log('------------------------------------');
  // console.log('getProducts: ', getProducts().slice(page - 1, page * PRODUCTS_PER_PAGE));
  console.log('page: ', page);
  console.log('------------------------------------');
  res.json(getProducts().slice( 
    (page === 1) ? 0 : (page - 1) * PRODUCTS_PER_PAGE, 
    page * PRODUCTS_PER_PAGE + PRODUCTS_PER_PAGE))
})

module.exports = router
