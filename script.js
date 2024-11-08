let captchaChecked = false;

function beforeSubmit(event) {
  debugger;
  if (captchaChecked) {
    let outputDate = document.querySelector(".outputDate");
    let inputDate = document.querySelector(".inputDate");
    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-US");
    outputDate.value = formattedDate;
    console.log(formattedDate);
  } else {
    alert("Please check the reCAPTCHA box to Submit");
    event.preventDefault()
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captchaSuccess() {
  captchaChecked = true;
}
