const express = require( 'express' )
const path = require( 'path' )
const favicon = require( 'serve-favicon' )
const logger = require( 'morgan' )
const cookieParser = require( 'cookie-parser' )
const bodyParser = require( 'body-parser' )

const cors = require( 'cors' )

const index = require( './routes/index' )
const products = require( './routes/products' )

const app = express()

// view engine setup
app.set( 'views', path.join( __dirname, 'views' ) )
app.set( 'view engine', 'jade' )

// uncomment after placing your favicon in /public
// app.use( favicon( path.join( __dirname, 'public', 'favicon.ico' ) ) )
app.use( logger( 'dev' ) )
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )
app.use( cookieParser() )
app.use( express.static( path.join( __dirname, 'public' ) ) )

// app.use(cors())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  // allow preflight
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.use( '/', index )
app.use( '/products', products )

// catch 404 and forward to error handler
app.use( function ( req, res, next ) {
  const err = new Error( 'Not Found' )
  err.status = 404
  next( err )
} )

// error handler
app.use( function ( err, req, res, next ) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get( 'env' ) === 'development' ? err : {}

  // render the error page
  res.status( err.status || 500 )
  res.render( 'error' )
} )

module.exports = app
