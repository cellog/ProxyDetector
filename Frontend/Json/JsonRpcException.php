<?php
namespace SMGregsList\Frontend\Json;
class JsonRpcException extends \Exception
{
    const ILLEGALSERVICE = 1;
    const SERVICENOTFOUND = 2;
    const CLASSNOTFOUND = 3;
    const METHODNOTFOUND = 4;
    public $origin;
    function __construct($origin, $code, $message)
    {
        parent::__construct($message, $code);
        $this->origin = $origin;
    }

    static function fromException(\Exception $e)
    {
        return new self(2, $e->getCode(), $e->getMessage());
    }
}
