<?php

require_once($_SERVER["DOCUMENT_ROOT"]. '/P4Blog/controllers/Router.php');

$router = new Router();

$router->routeReq();
?>
