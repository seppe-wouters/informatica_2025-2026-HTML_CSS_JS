<?php
if (empty($_POST["naam"])) {
    echo "je hebt geen naam ingevuld";
    return;
} else {
    $naam = $_POST["naam"];
}

if (empty($_POST["leeftijd"])) {
    echo "je hebt geen leeftijd ingevuld";
    return;
} else {
    $leeftijd = $_POST["leeftijd"];
}

echo "<h1>hallo, $naam</h1>";
echo "<p>je bent $leeftijd jaar oud </p>";

echo "<a href='./index.php'><button>Terug</button></a>";
?> 