<?php
namespace Crits;
require 'vendor/autoload.php';
use Crits\portal\controllers\Router;
$router = new Router();
$router->routeReq();
?>
