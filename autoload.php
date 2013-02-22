<?php
function __autoload($class)
{
    if (strpos($class, 'PEAR2') !== false) {
        include (str_replace('\\', '/', $class) . '.php');
        return;
    }
    include(__DIR__ . '/' . str_replace(array('ProxyDetector\\', '\\'), array('', '/'), $class) . '.php');
}