function updateVariables() {
  var inputs = document.getElementsByTagName('input');
  console.log(inputs)
  for (input of Array.from(inputs)){
    window[input.id] = input.value;
  }
}
window.addEventListener('load', function() {
  document.getElementById('form').innerHTML = render_form();
  updateVariables();
  document.getElementById('output').innerHTML = render_output();

  document.getElementById('render_btn').addEventListener('click', function(){
    updateVariables();
    document.getElementById('output').innerHTML = render_output();
  });
})
