<?php
function __autoload($class)
{
    include __DIR__ . '/../' . str_replace(array('ThroughBall\\', '\\'), array('NewSim/', '/'),
                                        $class) . '.php';
}
$a = new ThroughBall\Util\MonitorParser;
$a->setup(file_get_contents('/Users/gbeaver2/201304022159-testing_0-vs-null.rcg'));
header('Content-type: application/json');
echo json_encode($a->parse());