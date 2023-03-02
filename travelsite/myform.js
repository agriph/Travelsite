function validateForm() {
  let fnameValue = document.forms["aForm"]["fname"].value;
  if (fnameValue == "") {
    alert("First name is required.");
    return false;
  }

  let lnameValue = document.forms["aForm"]["lname"].value;
  if (lnameValue == "") {
    alert("Last name is required.");
    return false;
  }
  
    let emailValue = document.forms["aForm"]["email"].value;
  if (emailValue == "") {
    alert("Your email is needed so that we can contact you.");
    return false;
  }

}