<?php
namespace ProxyDetector\Backend;
class HideMyAss
{
    protected $database;
    function __construct(Database $database)
    {
        $this->database = $database;
    }

    function parse()
    {
        $content = file_get_contents('https://api.scraperwiki.com/api/1.0/datastore/sqlite?format=json&name=hide_my_ass_proxy_list_ip&query=select+*+from+`hidemyass`&apikey=');
        $content = json_decode($content, true);
        foreach ($content as $entry) {
            $this->database->addProxy($entry['ipaddress'], 'hidemyass.com proxies', '', true);
        }
    }
}