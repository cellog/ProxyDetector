<?php
namespace ProxyDetector;
class Main extends Messager
{
    protected $data;
    protected $frontend;
    function __construct(Frontend $frontend)
    {
        $this->data = new Backend\DataLayer\Sqlite3;
        $this->frontend = $frontend;
        // register messages
        $frontend->attach($this);
        $this->data->attach($this);
    }

    function start()
    {
        $this->message('ready');
    }
}