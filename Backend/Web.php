<?php
namespace ProxyDetector\Backend;
class Web
{
    protected $database;
    function __construct(Database $database)
    {
        $this->database = $database;
    }

    function parse()
    {
        $content = file_get_contents('https://api.scraperwiki.com/api/1.0/datastore/sqlite?format=json&name=web_proxy_scraper&query=select+*+from+`swdata`&apikey=');
        $content = json_decode($content, true);
        foreach ($content as $entry) {
            $this->database->addProxy($entry['ip'], "Web proxy", $entry['name'], true);
        }
    }
}