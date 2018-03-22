function ajax(options) {
  return new Promise(function (resolve, reject) {
    $.ajax(options).done(resolve).fail(reject);
  });
}

ajax({
  url: someURL,
  type: 'post',
  contentType: 'application/json; charset=utf-8',
  data: JSON.stringify({
    something: something,
    anotherthing: anotherthing
  })
}).then(
  function fulfillHandler(data) {
    // ...
  },
  function rejectHandler(jqXHR, textStatus, errorThrown) {
    // ...
  }
).catch(function errorHandler(error) {
  // ...
});