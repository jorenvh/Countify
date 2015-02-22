# Countify
Laravel 5 package to count the words in a textarea.

## Instalation

Require it in your composer.json file

```php
"thunder/countify": "dev-master"
``` 
Add the service provider to the service providers array in config > app.php

```php
'thunder\Countify\CountifyServiceProvider',
``` 
Add an alisas to the aliasses array in config > app.php

```php
'Countify'  => 'thunder\Countify\Facades\Countify',
``` 

PSR4 autoload it

```php
"thunder\\Countify\\": "vendor/thunder/Countify/src/"
``` 

Do a composer update

Publish the resources through this command 

```php
php artisan vendor:publish
``` 

## Usages

Include the published resources in your view. Jquery is required.

```html
<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="js/Countify.js"></script>
```

All that rests now is the textarea with an id of count, a span or div with an idea of words. And an hidden field with your laravel token.

```html
<textarea id="count"></textarea>
<input id="_token" type="hidden" name="_token" value="{{ csrf_token() }}" />
<p>
    Aantal woorden: <span id="words"></span>
</p>
```

You're good to go know, enjoy it.