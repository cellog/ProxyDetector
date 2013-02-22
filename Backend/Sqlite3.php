<?php
namespace ProxyDetector\Backend;
use ProxyDetector\Backend\Database,ProxyDetector\Proxy;
class Sqlite3 extends Database
{
    public static $DATABASEPATH = '';
    protected $db;
    function __construct($database = null)
    {
        if (!$database) {
            $database = self::$DATABASEPATH;
        }
        $this->db = new \SQLite3($database);
        $this->db->enableExceptions(true);
    }

    function getProxyDatabaseSql()
    {
        return 'CREATE TABLE proxies (
            ip TEXT PRIMARY KEY NOT NULL,
            proxytype TEXT NOT NULL,
            name TEXT
        );';
    }

    function removeType($type)
    {
        $this->db->exec("DELETE FROM proxies WHERE proxytype='" . $this->db->escapeString($type) . "'");
    }

    function addProxy($ip, $type, $name = null, $noreturn = false)
    {
        $this->db->exec("INSERT OR REPLACE INTO proxies VALUES ('" .
                        $this->db->escapeString($ip) . "','" .
                        $this->db->escapeString($type) . "','" .
                        $this->db->escapeString($name) . "')");
        if ($noreturn) return;
        return new Proxy($ip, $type, $name);
    }

    function getProxy($ip)
    {
        $res = $this->db->query("SELECT ip, proxytype, name FROM proxies WHERE ip='" . $this->db->escapeString($ip) . "'");
        $info = $res->fetchArray(SQLITE3_ASSOC);
        if (!$info) return false;
        $ret = new Proxy($info['ip'], $info['proxytype'], $info['name']);
        return $ret;
    }
}