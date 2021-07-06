function donate() {
    var radios = document.getElementsByName('donation');
    window.location = "bonusfinal.html";
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            let message = document.getElementById('message');
            message.innerHTML = "Thank you for your donation of " + radios[i].value;
            break;
        }
    }
}