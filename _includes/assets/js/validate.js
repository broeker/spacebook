// Mark a form element which needs a value.
function flagIfEmpty(input){
    if(input.value.length < 1) {
    input.classList.add("needs-content");
    }
    }
    
    // Add a submit handler to any forms.
    // Don't allow null submissions of required fields
    (function(){
    var forms = document.querySelectorAll('form');
    if(forms.length == 0){ return;}
    
    // do this for all forms on the page
    for (let f = 0; f < forms.length; f++) {
    forms[f].addEventListener('submit', function(event) {
    event.preventDefault();
    let form = event.target;
    
    // reset any flags
    var flags = form.querySelectorAll('.needs-content');
    for (let f = 0; f < flags.length; f++) {
    flags[f].classList.remove('needs-content');
    }
    
    // flag any fields which are missing input
    let inputs = form.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
    flagIfEmpty(inputs[i]);
    }
    let text = form.querySelectorAll('textarea');
    for (let t = 0; t < text.length; t++) {
    flagIfEmpty(text[t]);
    }
    
    // abort if there are flagged fields (other than the honeypot)
    // otherwise we can submit.
    flags = form.querySelectorAll('.needs-content');
    if(flags.length > 1) {
    return false;
    } else {
    form.submit();
    }
    }, false);
    }
    })();