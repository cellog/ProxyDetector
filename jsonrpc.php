<?php
namespace ProxyDetector;
include __DIR__ . '/autoload.php';

Backend\Sqlite3::$DATABASEPATH = __DIR__ . '/data/proxies.db';
// basic web frontend, chrome extension frontend is json.php
$frontend = new Frontend\Json;
$main = new Main($frontend);
$main->start();