function validate() {

    if (document.myform.name.value == "") {
        document.myform.name.focus();
        return false;
    }

    if (document.myform.mail.value == "") {
        document.myform.mail.focus();
        return false;
    }

    var emailId = document.myform.mail.value;
    let atposn = emailId.indexOf("@");
    let dotposn = emailId.lastIndexOf(".");

    if (atposn < 1 || dotposn - atposn < 2) {
        document.myform.mail.focus();
        return false;
    }

    if (document.myform.Reason.value == "") {
        document.myform.Reason.focus();
        return false;
    }

    if (document.myform.phone.value == "" || isNaN(document.myform.phone.value) || document.myform.phone.value.length !== 11) {
        document.myform.phone.focus();
        return false;
    }

    if (document.myform.Message.value == "") {
        document.myform.Message.focus();
        return false;
    }


}