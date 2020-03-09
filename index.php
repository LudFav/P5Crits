<?php
require "vendor/autoload.php"; 
use CritsPortal\controllers;

$router = new controllers\Router();
$router->routeReq();
?>
