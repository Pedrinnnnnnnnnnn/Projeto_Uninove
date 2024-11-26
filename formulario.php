<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   io
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    header("Location: file:///C:/xampp/htdocs/meu_projeto/agradecimento.html");
    exit();
}
?>
