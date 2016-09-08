$(document).ready(function() {
  // set default values for currency and make usd checked
  var currency = " USD";
  var euroPrice;
  var usdPrice;
  $(".usd").prop("checked",true);
  $(".usd").prop("disabled",true);

  // function which will declare when the usd checked
  function usdChange() {
    $(".usd").prop("disabled",true);
    $(".euro").prop("disabled",false);
    $(".euro").prop("checked",false);
    $(".price").val(usdPrice) ;
    currency = " USD";
  }

  // function which will declare when the euro checked
  function euroChange() {
    $(".euro").prop("disabled",true);
    $(".usd").prop("disabled",false);
    $(".usd").prop("checked",false);
    $(".price").val(euroPrice);
    currency = " EURO";
  }
  // events when usd/euro checked will call the function above
  $(".euro").on("change",euroChange);
  $(".usd").on("change",usdChange);

  // function responsible for calculating the final result money and add it to history
  function result(e) {
    var amount = $(".amount").val();
    var price = $(".price").val();
    var resultNum;
    if (price > 0 && amount > 0) {
      if ($(".usd").prop("checked")) {
        usdPrice = price;
      } else if ($(".euro").prop("checked")) {
        euroPrice = price;
      }
      resultNum = amount * price;
      $(".final").text(resultNum);
      var history = $('<li>You have converted ' +  $(".amount").val() + currency + " to " + $(".final").text() + ' EGP <button class="btn btn-danger">remove</button></li>');
      $(".history").append(history);
    }
    e.preventDefault();
  }

  // call the result function when the submit buton clicked
  $(".submit").on("click", result);

  // function to remove specific result
  function removeResult() {
    $(this).parent('li').remove();
  }

  // call the remove function
  $('article').on('click', 'button', removeResult);

  // function for clearing the history
  function clearHistory(e) {
    for (var i = 0 ; $("history").find("li").length > i; i++) {
      $("history").find("li").remove();
    }
  }

  // clear the history when click on clear history button
  $("button").on("click", clearHistory);
});