<?php

namespace Tests\Http\Controllers\Auth;

use App\Entities\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Lang;
use Tests\TestCase;

class RegisterControllerTest extends TestCase
{
    use DatabaseMigrations;

    public function testRegisterSuccess()
    {
        $this
            ->visit('/register')
            ->see('Register')
            ->type('melihovv', 'name')
            ->type('amelihovv@ya.ru', 'email')
            ->type('password', 'password')
            ->type('password', 'password_confirmation')
            ->press('Register')
            ->seePageIs('/home');
    }

    public function testLoginOnlyGuestHasAccess()
    {
        $user = factory(User::class)->create();

        $this
            ->actingAs($user)
            ->visit('/register')
            ->seePageIs('/home');
    }

    public function testRegisterDuplicateName()
    {
        $user = factory(User::class)->create();

        $this
            ->visit('/register')
            ->see('Register')
            ->type($user->name, 'name')
            ->type('amelihovv@ya.ru', 'email')
            ->type('password', 'password')
            ->type('password', 'password_confirmation')
            ->press('Register')
            ->seePageIs('/register')
            ->see(Lang::get('validation.unique', ['attribute' => 'name']));
    }
}
