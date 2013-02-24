<?php
namespace ProxyDetector\Frontend;
use ProxyDetector\Messager, ProxyDetector\Frontend;

class Json extends Messager implements Frontend
{
    function __construct(Json\Controller $controller = null)
    {
        if (null === $controller) {
            $controller = new Json\Controller;
        }
        $this->addDependency($controller);
    }

    function listMessages(array $newmessages)
    {
        return parent::listMessages(array_merge($newmessages, array('matches', 'ready', 'jsonHello')));
    }

    function jsonReply($message, $params = array())
    {
        $this->broadcast('reply', array('message' => $message, 'params' => $params));
    }
    
    function receive($message, $content)
    {
        if ($message == 'ready') {
            $this->broadcast('parseJson');
        } elseif ($message == 'jsonHello') {
            $this->jsonReply('hello', array('api' => Json\Controller::APIVERSION, 'extmin' => Json\Controller::minExtVersion));
        } elseif ($message == 'matches') {
            $this->jsonReply('matches', $content);
        } elseif ($message == 'processedFreeproxylist') {
            $this->jsonReply('done');
        }
    }
}