

function msgfrwd() {

    let msg = document.getElementById("msg").value

    if (document.getElementById("ali").checked) {
        console.log(msg + "Ali");
    }

    if (document.getElementById("usman").checked) {
        console.log(msg + "Usman");
    }

    if (document.getElementById("ahmed").checked) {
        console.log(msg + "Ahmed");
    }

    if (document.getElementById("imran").checked) {
        console.log(msg + "Imran");
    }

    if (document.getElementById("irfan").checked) {
        console.log(msg + "Irfan");
    }

    document.getElementById("msg").value = ""

}