<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $naam = "";
    $leeftijd;
    $melding = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (!empty($_POST["naam"])) {
            $naam = $_POST["naam"];
            $melding = "<p style='color: green;'>Welkom $naam</p>";
        } else {
            $melding = "<p style='color: red;'>je hebt geen naam ingegeven</p>";
        }
        if (!empty($_POST["leeftijd"])) {
            $leeftijd = $_POST["leeftijd"];
        } else {
            $melding = "<p style='color: red;'>je hebt geen leeftijd ingegeven</p>";
        }
    } else {
        $melding = "<p>het formulier werd nog niet verzonden</p>";
    }

    ?>
    <form action="" method="post">
        <input type="text" name="naam" placeholder="naam" value="<?php echo $naam ?>">
        <input type="number" name="leeftijd" placeholder="leeftijd" value="<?php echo $leeftijd ?>">
        <input type="submit">
    </form>

    <div>
        <?php
        echo "$melding";
        ?>
    </div>

</body>

</html>