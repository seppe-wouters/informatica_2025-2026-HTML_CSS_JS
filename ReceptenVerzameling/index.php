<?php
session_start();

$melding = "";

if (!isset($_SESSION["recepten"])) {
    $_SESSION["recepten"] = [];
}

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (empty($_POST["naam"]) || empty($_POST["moeilijkheid"])) {
        $melding = "Velden niet correct ingevuld";
    } else {
        if ($_POST["moeilijkheid"] <= 3) {
            $kleur = "green";
        } else if ($_POST["moeilijkheid"] > 4 && $_POST["moeilijkheid"] <= 7) {
            $kleur = "orange";
        } else {
            $kleur = "red";
        }

        $recept = [
            "naam" => $_POST["naam"],
            "categorie" => $_POST["categorie"],
            "moeilijkheid" => $_POST["moeilijkheid"],
            "kleur" => $kleur
        ];

        $_SESSION["recepten"][] = $recept;
        header("Location: " . $_SERVER["PHP_SELF"]);
        exit();
    }
}
?>
<?php
if (isset($_POST["verwijder"])) {
    $i = $_POST["verwijder"];
    unset($_SESSION["recepten"][$i]);
    header("Location: " . $_SERVER["PHP_SELF"]);
    exit();

}
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Recept verzameling</title>
</head>

<body>
    <div class="container">
        <?php
        $categorieen = ["Voorgerecht", "Hoofdgerecht", "Dessert"];
        ?>
        <h2>Recepte verzameling</h2>
        <form method="post" class="d-flex flex-column mb-5 mt-3 gap-2">
            <input type="text" name="naam" placeholder="geef de naam van je recept">
            <select name="categorie">
                <?php foreach ($categorieen as $item): ?>
                    <option><?php echo $item ?></option>
                <?php endforeach ?>
            </select>
            <input type="number" name="moeilijkheid" placeholder="Moeilijkheidsgraad" min="1" max="10">
            <input type="submit">
            <?php echo $melding ?>
        </form>
        <div class="row">
            <div class="gap-2 justify-content-center mb-1"
                style="width: 100%; display: grid; grid-template-columns: repeat(auto-fill, 18rem);">
                <?php foreach ($_SESSION["recepten"] as $i => $recept): ?>
                    <div class="card"
                        style="width: 18rem; height: fit-content; background-color: <?php echo $recept["kleur"] ?>;">
                        <div class="card-body">
                            <h5 class="card-title"><?php echo $recept["naam"] ?></h5>
                            <p class="card-text">Categorie: <?php echo $recept["categorie"] ?></p>
                            <p class="card-text">Moeilijkheidsgraad: <?php echo $recept["moeilijkheid"] ?></p>
                            <form method="POST">
                                <button type="submit" class="btn btn-primary" name="verwijder" value="<?php echo $i ?>">verwijder</button>
                            </form>
                        </div>
                    </div>
                <?php endforeach ?>
            </div>
            <div class="mt-2">
                <h4>Aantal recepten: <?php echo count($_SESSION["recepten"]) ?></h4>
                <?php
                $totaleMoeilijkheid = 0;
                foreach ($_SESSION["recepten"] as $item) {
                    $totaleMoeilijkheid += $item["moeilijkheid"];
                }
                if (!count($_SESSION["recepten"]) == 0) {
                    $gem = round($totaleMoeilijkheid / count($_SESSION["recepten"]), 2);
                } else {
                    $gem = 0;
                }
                ?>
                <h4>Gemiddelde Moeilijkheidsgraad: <?php echo $gem ?></h4>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"></script>


</body>

</html>