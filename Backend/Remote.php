<?php
namespace ProxyDetector\Backend;
class Remote
{
    function __construct($parser, $address)
    {
        $content = file_get_contents($address);
        
    }
}