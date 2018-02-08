const Lib = {};

const _get = (params) => {

}

var request = ajax({
  method: 'options',
  url: 'http://localhost:3000/products',
  data: {
    user: 'john'
  }
})

console.log(request);
