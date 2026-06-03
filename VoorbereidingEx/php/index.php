<?php
session_start();

if (!isset($_SESSION['reizen'])) {
    $_SESSION['reizen'] = [];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $obj = [
        'id' => $_SESSION['reizenId'],
        'naam' => $_POST['inputNaam'] ?? '',
        'land' => $_POST['inputLand'] ?? '',
        'type' => $_POST['selectType'] ?? '',
        'aantalDagen' => $_POST['inputDagen'] ?? '',
        'budget' => $_POST['inputBudget'] ?? '',
        'prioriteit' => $_POST['selectPrioriteit'] ?? ''
    ];
    
    $_SESSION['reizen'][] = $obj;

    header("location: " . $_SERVER['PHP_SELF']);
    exit();
}

?>

<!doctype html>
<html lang="nl">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Reizen</title>
</head>
<body>
    <div class="container">
        <h2 class="mt-4">Reizen</h2>
        <form method="POST" class="d-flex flex-column gap-2 mb-5">
            <input type="text" name="inputNaam" placeholder="Naam van de bestemming" required>
            <input type="text" name="inputLand" placeholder="Land" required>
            <select name="selectType" required>
                <option value="Citytrip">Citytrip</option>
                <option value="Strandvakantie">Strandvakantie</option>
                <option value="Natuurreis">Natuurreis</option>
                <option value="Cultuurreis">Cultuurreis</option>
                <option value="Avontuur">Avontuur</option>
            </select>
            <input type="number" name="inputDagen" placeholder="aantal dagen" required>
            <input type="number" name="inputBudget" placeholder="Budget" required>
            <select name="selectPrioriteit" required>
                <option value="Laag">Laag</option>
                <option value="Gemiddeld">Gemiddeld</option>
                <option value="Hoog">Hoog</option>
            </select>
            <input type="submit" value="Voeg reis toe" class="btn btn-primary">
        </form>

        <h3>Beschikbare Reizen</h3>
        <div class="row gap-2 mb-5" id="divEl">
            <?php foreach ($_SESSION['reizen'] as $reis): ?>
                <?php
                $kleur = ($reis['prioriteit'] == 'Hoog') ? 'crimson' : '';
                $bgStyle = $kleur ? "background-color: {$kleur}; color: white;" : '';
                ?>
                <div class="card" style="width: 18rem; <?php echo $bgStyle; ?>">
                    <div class="card-body">
                        <h5 class="card-title"><?php echo $reis['naam']; ?></h5>
                        <p class="card-text">land: <?php echo $reis['land']; ?></p>
                        <p class="card-text">type: <?php echo $reis['type']; ?></p>
                        <p class="card-text">aantal Dagen: <?php echo $reis['aantalDagen']; ?></p>
                        <p class="card-text">budget: €<?php echo $reis['budget']; ?></p>
                        <p class="card-text">prioriteit: <?php echo $reis['prioriteit']; ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="row">
        
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</body>
</html>
