<?php namespace thunder\Countify\Facades;


use Illuminate\Support\Facades\Facade;

class Countify extends Facade {
    protected static function getFacadeAccessor() { return 'countify'; }
}