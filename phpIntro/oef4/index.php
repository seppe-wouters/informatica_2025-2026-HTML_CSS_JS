<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <form action="" method="post" id="form">
        <input type="text" name="naam" placeholder="Naam">
        <select name="festival" id="">
            <option value="Graspop">Graspop</option>
            <option value="Rock Werchter">Rock Werchter</option>
            <option value="Pukkelpop">Pukkelpop</option>
            <option value="Alcatraz">Alcatraz</option>
        </select>
        <input type="number" name="tickets" placeholder="aantal tickets">
        <div>
            <input type="checkbox" name="vip">
            <label for="">vip?</label>
        </div>
        <input type="submit">
        <div id="prijzen">
            <p>prijzen:</p>
            <p>standaard €65</p>
            <p>vip €120</p>
        </div>
    </form>
    <?php

    if (empty($_POST["naam"])) {
        echo "naam is niet ingevuld";
        return;
    } else {
        $naam = $_POST["naam"];
    }

    if ($_POST["tickets"] < 1) {
        echo "ongeldig aantal tickets";
        return;
    } else {
        $aantalTickets = $_POST["tickets"];
    }

    $festival = $_POST["festival"];
    $vip = $_POST["vip"];
    $totaal = 0;
    $prijs = 0;
    $vipJaNee = "";
    $boodschap = "";
    $achtergrond = "";

    if ($vip == "on") {
        $prijs = 120;
        $vipJaNee = "Ja";
    } else {
        $prijs = 65;
        $vipJaNee = "Nee";
    }

    if ($aantalTickets >= 5) {
        $totaal = ($aantalTickets * $prijs) * 0.9;
    } else {
        $totaal = $aantalTickets * $prijs;
    }

    if ($festival == "Graspop") {
        $boodschap = "Veel metalplezier";
        $achtergrond = "green";
    } else if ($festival == "Rock Werchter") {
        $boodschap = "Geniet van de headliners";
        $achtergrond = "yellow";
    } else if ($festival == "Pukkelpop") {
        $boodschap = "Vergeet je tent niet";
        $achtergrond = "blue";
    }
    echo "<div style='background-color: $achtergrond'>";
    echo "<h1>FESTIVALTICKET</h1>";
    echo "<br>";
    echo "<p>Naam: $naam</p>";
    echo "<p>Festival: $festival - <strong>$boodschap</strong></p>";
    echo "<p>Aantal tickets: $aantalTickets</p>";
    echo "<p>VIP-ticket: $vipJaNee</p>";
    echo "<br>";
    echo "<p>Totaal prijs: €$totaal</p>";
    echo "</div>"

        ?>
</body>

</html>