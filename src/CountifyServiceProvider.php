<?php namespace thunder\Countify;


use Illuminate\Support\ServiceProvider;

class CountifyServiceProvider extends ServiceProvider {

    /**
     * Register the service provider
     *
     * @return Countify
     */
    public function register()
    {
        $this->app->bind('countify', function()
        {
            return new Countify;
        });
    }

    /**
     * Resources that have to be published
     *
     */
    public function boot()
    {
        $this->publishes([
            __DIR__ . '/resources/js/' => base_path('/public/js/')
        ]);
    }

}