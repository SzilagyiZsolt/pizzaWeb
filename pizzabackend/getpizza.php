<?php
$sql = '';
if (count($kereSzoveg) > 1) {
    if (is_int(intval($kereSzoveg[1]))) {
        $sql = 'SELECT * FROM futar WHERE fazon='.$kereSzoveg[1];
        var_dump($sql);
    } else {
        http_response_code(404);
        echo 'Nem létező futár';
    }
} else {
    $sql = 'SELECT * FROM futar WHERE 1';
}
require_once './databaseconnect.php';
$result = $connection->query($sql);
if ($result->num_rows > 0) {
    $futar = array();
    while ($row = $result->fetch_assoc()) {
        $futar[] = $row;
    }
    http_response_code(200);
    echo json_encode($futar);
} else {
    http_response_code(404);
    echo 'Nincs egy futár sem';
}