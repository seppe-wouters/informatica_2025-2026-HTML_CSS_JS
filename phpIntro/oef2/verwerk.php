<?php
if (!empty($_POST["naam"]))
    $naam = $_POST["naam"];
else {
    echo "Naam niet ingevuld";
    return;
}
if (!empty($_POST["favGame"]))
    $favGame = $_POST["favGame"];
else {
    echo "Favoriete game niet ingevuld";
    return;
}
if (!empty($_POST["score"]))
    $score = $_POST["score"];
else {
    echo "Score niet ingevuld";
    return;
}

echo "<p>naam:\t $naam</p>";
echo "<p>Favoriete game: $favGame</p>";
echo "<p>Score:\t $score</p>";
?>