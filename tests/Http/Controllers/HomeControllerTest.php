<?php

namespace Tests\Http\Controllers;

use App\Entities\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class HomeControllerTest extends TestCase
{
    use DatabaseMigrations;

    public function testIndex()
    {
        $user = factory(User::class)->create();

        $this
            ->actingAs($user)
            ->get(route('home.index'));

        $this->assertResponseOk();
    }
}
