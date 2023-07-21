<?php
/**
 * Requires the "PHP Email Form" library
 * The "PHP Email Form" library is available only in the pro version of the template
 * The library should be uploaded to: vendor/php-email-form/php-email-form.php
 * For more info and help: https://bootstrapmade.com/php-email-form/
 */

// Replace contact@example.com with your real receiving email address
$receiving_email_address = 'info@tescomarine.com';

if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
    include($php_email_form);
} else {
    die('Unable to load the "PHP Email Form" Library!');
}

$contact = new PHP_Email_Form;
$contact->ajax = true;

$contact->to = $receiving_email_address;
$contact->from_name = $_POST['name'];
$contact->from_email = $_POST['email'];
$contact->subject = 'Müşteri Sorun Bildirim Formu';

// Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials

$contact->smtp = array(
    'host' => 'mail.tescomarine.com',
    'username' => 'test@tescomarine.com',
    'password' => ']3?,zgTTg@Q0',
    'port' => '587'
);

$contact->add_message($_POST['name'], 'Kimden');
$contact->add_message($_POST['email'], 'E-posta adresi');
$contact->add_message($_POST['phone'], 'Telefon');
$contact->add_message($_POST['message'], 'Mesaj', 10);

echo $contact->send();
?>