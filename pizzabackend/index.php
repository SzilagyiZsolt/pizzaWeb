<?php
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        require_once 'pizzabackend/getpizza.php';
        break;
    case 'POST':
        require_once 'pizzabackend/postpizza.php';
        break;
    case 'DELETE':
        require_once 'pizzabackend/deletepizza.php';
        break;
    case 'PUT':
        require_once 'pizzabackend/putpizza.php';
        break;
    default:
        break;
}