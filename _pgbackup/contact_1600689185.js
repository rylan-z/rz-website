(function ($) {
    "use strict";
      
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxiGnF1T_rPyL8Q1OMWJwWupMd071ZclOpu21KBtyyMLXp_uN4/exec",
            method: "POST",
            dataType: "json",
            data: $(".contact1-form").serialize(),
            success: function(response) {
                
                if(response.result == "success") {
                    $('.contact1-form')[0].reset();
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

})(jQuery);