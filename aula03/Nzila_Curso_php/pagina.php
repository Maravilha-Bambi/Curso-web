<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <?php
$usuario="root";
$senha="";
$bd="nzila";
$servidor="localhost";

    #Link de conexão
    $conexao=mysqli_connect($servidor,$usuario,$senha,$bd);
    if($conexao){
        echo("Conexão feita com sucesso </br>");
    }
    else{
        echo("verifica a conexão  </br> ");
        die("Erro: ".mysqli_connect_error()); # essa função retorna uma sms de erro
    }

#Esse passo serve para fechar a conexão,ela vai retornar uma sms diferente.
 if(mysqli_close($conexao)){
        echo(" </br> Conexão feita fechada");
    }
    else{
        echo("verifica a conexão");
        die("Erro: ".mysqli_connect_error()); # essa função retorna uma sms de erro
    }
    ?>

</body>
</html>