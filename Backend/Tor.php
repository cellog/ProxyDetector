<?php
namespace ProxyDetector\Backend;
class Tor
{
    protected $database;
    function __construct(Database $database)
    {
        $this->database = $database;
    }

    function parse()
    {
        $content = file_get_contents('https://check.torproject.org/cgi-bin/TorBulkExitList.py?ip=176.9.141.117');
        if (!$content) {
            return;
        }
        $this->database->removeType('tor');
        $content = explode("\n", $content);
        foreach ($content as $ip) {
            if ($ip[0] == '#') continue;
            $this->database->addProxy($ip, 'tor', '', true);
        }
    }
}