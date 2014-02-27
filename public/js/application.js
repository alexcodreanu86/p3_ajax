$(document).ready(function(){
  $("#get_color").on('click',function(e){
    var data;
    $.post('/color',data, function(response){
      $('#' + response.cell).attr('style', 'background-color: ' + response.color + ";");
    },"json");
  })
});