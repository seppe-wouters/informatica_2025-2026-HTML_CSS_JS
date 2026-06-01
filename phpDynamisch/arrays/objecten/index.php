<?php
session_start();
if (!isset($_SESSION["reviews"])) {
    $_SESSION["reviews"] = [];
}

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $game = [
        "naam" => $_POST["game"],
        "genre" => $_POST["genre"],
        "score" => $_POST["score"]
    ];

    $_SESSION["reviews"][] = $game;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $genres = ["Avontuur", "FPS", "Sport", "Strategie"];
    ?>
    <h2>game reviews</h2>
    <form method="post">
        <input type="text" name="game" placeholder="naam game"><br><br>
        <select style="width: 150px;" name="genre">
            <?php foreach ($genres as $genre): ?>
                <option value="<?php echo $genre ?>"><?php echo $genre ?></option>
            <?php endforeach ?>
        </select><br><br>
        <input style="width: 150px;" type="number" name="score" placeholder="geef score" min="0" max="10"><br><br>
        <input type="submit">
    </form>
    <?php foreach ($_SESSION["reviews"] as $review): ?>
        <br>
        <div>
            <span style="color: green;">game:<?php echo $review["naam"] ?></span><br>
            <span style="color: red;">genre:<?php echo $review["genre"] ?></span><br>
            <span>score:<?php echo $review["score"] ?>/10</span><br>
        </div>
    <?php endforeach ?>
</body>

</html>