//auto expanding contact text area
var autoExpand = function(field) {
  // Reset field height
  field.style.height = 'inherit';
  // Get the computed styles for the element
  var computed = window.getComputedStyle(field);
  // Calculate the height
  var height = parseInt(computed.getPropertyValue('border-top-width'), 10) +
    parseInt(computed.getPropertyValue('padding-top'), 10) +
    field.scrollHeight +
    parseInt(computed.getPropertyValue('padding-bottom'), 10) +
    parseInt(computed.getPropertyValue('border-bottom-width'), 10);

  field.style.height = height + 'px';
};
document.addEventListener('input', function(event) {
  if (event.target.tagName.toLowerCase() !== 'textarea') return;
  autoExpand(event.target);
}, false);

var form = document.querySelector('.pageclip-form')
Pageclip.form(form, {
  onSubmit: function (event) { },
  onResponse: function (error, response) { },
  successTemplate: '<span>Thank you! Your submission has been received, I will respond shortly</span>'
})