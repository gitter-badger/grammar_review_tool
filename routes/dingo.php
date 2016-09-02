<?php

use Dingo\Api\Routing\Router;

$api = app(Dingo\Api\Routing\Router::class);

$api->version('v1', [
    'middleware' => ['api'],
    'namespace' => 'App\Http\Controllers',
], function (Router $api) {
    $api->post('authenticate', 'Auth\AuthController@authenticate');

    $api->group(['middleware' => ['api.auth']], function (Router $api) {
        $api->resource('grammars', 'GrammarsController', [
            'except' => ['create', 'edit'],
        ]);

        $api->resource('grammars.comments', 'CommentsController', [
            'except' => ['index', 'create', 'show', 'edit'],
        ]);
    });
});