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


// contact submission


$('.contact-form').on('submit',function(e){
        //optional validation code here
  
        e.preventDefault();
      
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxuSCQS7maeU-2N3E7T0fgqGlby5bGOEmLSvmh2/exec",
            method: "POST",
            dataType: "json",
            data: $(".contact-form").serialize(),
            success: function(response) {
                
                if(response.result == "success") {
                    $('.contact-form')[0].reset();
                    alert('Thank you for contacting us.');
                    return true;
                }
                else {
                    alert("Something went wrong. Please try again.")
                }
            },
            error: function() {
                
                alert("Something went wrong. Please try again.")
            }
        })
    });