<?php
namespace ProxyDetector;
include __DIR__ . '/../autoload.php';

Backend\Sqlite3::$DATABASEPATH = dirname(__DIR__) . '/data/proxies.db';
$tor = new Backend\Tor(new Backend\Sqlite3);
$tor->parse();