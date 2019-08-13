$(function() {
  var fields = $('#form1 :input').change(calculate)
  $("#form1 option").text(function(i, t) {
    if (this.value !== "0")
      return t + " - " + this.value
  }).first().change()
  
function calculate() {
  var price = 0;
  var list = []
  fields.each(function() {
    price += +$(this).val();
    if ($(this).val() > 0)
      list.push($(this).find("option:selected").text())
  })
  $("#list").html(list.join("<br>"))
  $('#price').html(price.toFixed(2));
}
})
