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