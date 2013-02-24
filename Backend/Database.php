<?php
namespace ProxyDetector\Backend;
use ProxyDetector\Messager;
abstract class Database extends Messager
{
    abstract function removeType($type);
    abstract function addProxy($ip, $type, $name = null, $noreturn = false);
    abstract function getProxy($ip);

    function listMessages(array $newmessages)
    {
        return parent::listMessages(array_merge($newmessages, array('checkMultiple', 'grepFreeproxylists')));
    }

    function reply($message, $content)
    {
        if ($message == 'detectProxy') {
            if (!is_string($content)) {
                throw new \Exception('Internal error: detectProxy message with non-string IP address as parameter');
            }
            return $this->getProxy($content['ip']);
        }
    }

    function receive($message, $content)
    {
        if ($message == 'addProxy') {
            if (!is_array($content) || !isset($content['ip']) || !isset($content['type'])) {
                throw new \Exception('Internal error: addProxy message with non-array or no ip or no type index');
            }
            if (!isset($content['name'])) {
                $content['name'] = '';
            }
            $ret = $this->addProxy($content['ip'], $content['type'], $content['name']);
            $this->broadcast('proxyAdded', $ret);
        } elseif ($message == 'checkMultiple') {
            if (!is_array($content)) {
                throw new \Exception('Internal error: checkMultiple message with non-array');
            }
            $ret = array();
            foreach ($content as $ip) {
                if ($p = $this->getProxy($ip)) {
                    $ret[] = $p->toJson();
                }
            }
            $this->broadcast('matches', $ret);
        } elseif ($message == 'grepFreeproxylists') {
            $content = urldecode($content);
            preg_match_all('/>(\d+\.\d+\.\d+\.\d+)</', $content, $ips);
            foreach ($ips[1] as $ip) {
                $this->addProxy($ip, 'Web proxy', 'http://freeproxylists.com');
            }
            $this->broadcast('processedFreeproxylist');
        }
    }
}