(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var contact_method = $('.validate-input input[name="contact"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(e){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }

        if($(subject).val().trim() == ''){
            showValidate(contact_method);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(contact);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }
        if(!check)
            return false;

        e.preventDefault();
      
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


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);