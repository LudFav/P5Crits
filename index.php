<?php
session_start();
require "vendor/autoload.php"; 
$router = new CritsPortal\controllers\Router();
$router->routeReq();
?>
