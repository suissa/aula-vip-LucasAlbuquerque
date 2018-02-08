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

const getBeginPage = (page) => (page === 1) ? 0 : (page - 1) * PRODUCTS_PER_PAGE
const getEndPage = (page) => page * PRODUCTS_PER_PAGE + PRODUCTS_PER_PAGE
const createArray = (size = 10, value = 0) => Array(size).fill(value)
const createProducts = (list, fn) => list.map(fn)
const getProductsByPage = (page, list) => list.slice(getBeginPage(page), getEndPage(page))


const getProducts = (page) => getProductsByPage(page, 
                                                  createProducts(
                                                    createArray(QNTD_PRODUCTS), 
                                                    getRandomProduct
                                                  )
                                                )

router.get('/:page?', (req, res, next) =>
  res.json( getProducts( ( !req.params.page ) ? 1 : Number( req.params.page )) )
)

module.exports = router
