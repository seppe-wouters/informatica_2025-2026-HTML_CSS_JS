<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="verwerk.php" method="POST">
        <input type="text" name="naam" placeholder="geef je naam in">
        <input type="text" name="favGame" placeholder="geef je favoriete game in">
        <input type="number" name="score" placeholder="geef een score op 10" min="0" max="10">
        <select name="genre">
            <option value="FPS">FPS</option>
            <option value="MMO">MMO</option>
            <option value="Roguelike">Roguelike</option>
        </select>
        <label for="">mening:</label>
        <textarea name="mening"></textarea>
        <input type="submit">
    </form>
</body>
</html>