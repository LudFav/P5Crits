<?php
namespace CritsPortal;
session_start();

require "vendor/autoload.php"; 
$router = new controllers\Router();
$router->routeReq();
?>
