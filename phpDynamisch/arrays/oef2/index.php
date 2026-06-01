<?php
session_start();

if (!isset($_SESSION["namen"])) {
    $_SESSION["namen"] = [];
}

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $_SESSION["namen"][] = $_POST["naam"];
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

<body>
    </head>
    <form method="post">
        <input type="text" name="naam" placeholder="naam">
        <input type="submit">
    </form>

    <div>
        <ul>
            <?php foreach ($_SESSION["namen"] as $item): ?>
                <li><?= $item ?></li>
            <?php endforeach ?>
        </ul>
    </div>

</body>

</html>