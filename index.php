<?php
namespace CritsPortal;
require "vendor/autoload.php"; 
use CritsPortal\controllers\Router;

$router = new Router();
$router->routeReq();
?>
