<?php
namespace ProxyDetector;
class Proxy
{
    protected $ip, $type, $name;

    function __construct($ip, $type, $name = '')
    {
        $this->ip = $ip;
        $this->type = $type;
        $this->name = $name;
    }

    function ip()
    {
        return $this->ip;
    }

    function type()
    {
        return $this->type;
    }

    function name()
    {
        return $this->name;
    }
}