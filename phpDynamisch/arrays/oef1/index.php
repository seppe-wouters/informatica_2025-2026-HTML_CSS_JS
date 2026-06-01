<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $fruit = ["appel", "peer", "banaan", "ananas"];
    ?>

    <ol>
        <?php
            foreach($fruit as $vrucht) {
            echo "<li>$vrucht</li>";
            }
        ?>
    </ol>
</body>
</html>