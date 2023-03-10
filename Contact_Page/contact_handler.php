<?php 
// The PHP is here to send the form. 
if(isset($_POST["submit"])) {
    $email = $_POST["email"];
    $name = $_POST["fname"]; 
    $mess = $_POST["user_mess"]; 

    $recipient = "jennifernguyen0000@gmail.com";
    $headers = "Message from ".$email." sent via Personal Portfolio website."; 
    $txt = "You have received an email from ".$name.".\n\n".$mess;

    mail($recipient, "Contact from Personal Portfolio Website", $txt, $headers); 
    header("Location: contact.php?mailsend");

    echo "Success!";
    //TODO: A confirmation page
}
?>