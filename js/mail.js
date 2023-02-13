//this file is destined to send mail thanks to the contact form
//we claim infos with simple DOM id readings.

//we declare the function that will be called when the form is submitted
function sendMail() {
    var dateContact = document.getElementById("dateContact").value;
    var nameContact = document.getElementById("nameContact").value;
    var firstNameContact = document.getElementById("firstNameContact").value;
    var emailContact = document.getElementById("emailContact").value;
    var genreContact = document.getElementById("genreContact").value;
    if (genreContact == "Monsieur") {
        var genreContact = "M.";
    } else if (genreContact == "Madame") {
        var genreContact = "Mme";
    }
    else{
        var genreContact = "";
    }

    var birthDateContact = document.getElementById("birthDateContact").value;
    var roleBusiness = document.getElementById("roleBusiness").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value+ "<br><br><br><br><br><br><br><br>" + genreContact + " " + firstNameContact + " " + nameContact + " né(e) le " + birthDateContact + " est " + roleBusiness + " et souhaite être contacté(e) à l'adresse suivante : " + emailContact + " le " + dateContact + ".\n" + "Cette personne a pour sujet : " + subject + ".\n" ;
    //controle de recup de data
    //console.log("data -->>"+dateContact+" "+nameContact+" "+firstNameContact+" "+emailContact+" "+genreContact+" "+birthDateContact+" "+roleBusiness+" "+subject+" "+message);

    //now we send a mail with the data thanks to the smtp js inclusion

//email pswd: 86ECE90F7D4710B773632A450F1B37C6BB19, encrypt is a13e5f50-83f4-4f32-9f64-e57c65ed8856 

    Email.send({
        SecureToken : "a13e5f50-83f4-4f32-9f64-e57c65ed8856",
        To : emailContact,
        From : "abademaxim@cy-tech.fr",
        Subject : subject,
        Body : message
    }).then(
    message => alert(message)
    );
}
