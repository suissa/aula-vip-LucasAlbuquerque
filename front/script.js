const Lib = {};

const _get = (params) => {

}

var request = ajax({
  method: 'get',
  url: 'http://localhost:3000/products'
})

const success = (data) => console.log('success: ', data)
const error = (err) => console.log('error: ', err)


console.log(request.then(success).catch(error));
