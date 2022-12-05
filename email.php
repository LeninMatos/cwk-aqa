<?php

$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$telefone = addslashes($_POST['telefone']);
$mensagem = addslashes($_POST['mensagem']);

$to = "contato@coworkingararaquara.com";
$subject = "Contato do site";
$body = "Nome: " . $nome . "\r\n".
"E-mail: " . $email . "\r\n".
"Telefone: " . $telefone . "\r\n".
"Mensagem: " . $mensagem;
$header = "From: contato@coworkingararaquara.com"."\r\n".
"Reply-to: ".$email."\r\n".
"X=Mailer: PHP/".phpversion();

if(mail($to,$subject,$body,$header)) {
    echo("Email enviado com sucesso!");
}else{
    echo("O Email não pode ser enviado!");
}
?>