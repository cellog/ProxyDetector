<?php
namespace ProxyDetector;
include __DIR__ . '/../autoload.php';

Backend\Sqlite3::$DATABASEPATH = dirname(__DIR__) . '/data/proxies.db';
$hma = new Backend\HideMyAss(new Backend\Sqlite3);
$hma->parse();