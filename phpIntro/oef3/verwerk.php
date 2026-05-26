<?php
if (!empty($_POST["naam"]) && !empty($_POST["favGame"]) && !empty($_POST["score"]) && !empty($_POST["mening"])) {
    $naam = $_POST["naam"];
    $favGame = $_POST["favGame"];
    $score = $_POST["score"];
    $genre = $_POST["genre"];
    $mening = $_POST["mening"];
} else {
    echo "er is iets niet ingevuld";
    return;
}

echo "<p>naam: $naam</p>";
echo "<p>Favoriete game: $favGame</p>";

if ($score <= 4) {
    echo "<p style='color: red;'>score: $score, slechte game</p>";
} else if ($score > 5 && $score <= 7) {
    echo "<p style='color: orange;'>score: $score, Goede game</p>";
} else {
    echo "<p style='color: green;'>score: $score, Fantastische game</p>";
}

echo "<p>genre: $genre</p>";
echo "<p>mening: $mening</p>";

?>