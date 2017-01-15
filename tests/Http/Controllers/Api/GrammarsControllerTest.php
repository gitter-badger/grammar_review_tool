<?php

namespace Tests\Http\Controllers\Api;

use App\Entities\Grammar;
use App\Entities\Right;
use App\Entities\User;
use App\Http\Transformers\GrammarTransformer;
use Dingo\Api\Routing\UrlGenerator;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\ApiHelpers;
use Tests\TestCase;

class GrammarsControllerTest extends TestCase
{
    use DatabaseMigrations;
    use ApiHelpers;

    public function testIndex()
    {
        $user = factory(User::class)->create();
        factory(Grammar::class, 10)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.index');

        $this
            ->actingAsApiUser($user)
            ->get($route, $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => [
                '*' => GrammarTransformer::attrs(),
            ],
            'meta' => [
                'pagination',
            ],
        ]);
    }

    public function testStore()
    {
        $user = factory(User::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.store');

        $this
            ->actingAsApiUser($user)
            ->post($route, [
            'name' => 'grammar1',
            'content' => 'hi',
            'public_view' => false,
            'allow_to_comment' => false,
        ], $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => GrammarTransformer::attrs(),
        ]);
        $this->seeInDatabase('grammars', [
            'name' => 'grammar1',
            'content' => 'hi',
            'public_view' => false,
        ]);
    }

    /**
     * @dataProvider showSuccessProvider
     */
    public function testShow($cb)
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $cb($user, $grammar);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.show', [$grammar->id]);

        $this
            ->actingAsApiUser($user)
            ->get($route, $this->headers('v1', $user));

        $this->seeJsonStructure([
            'data' => GrammarTransformer::attrs(),
        ]);
    }

    public function showSuccessProvider()
    {
        return [
            'user is admin' => [function ($user, $grammar) {
                $user->update(['is_admin' => true]);
            }],
            'user is grammar owner' => [function ($user, $grammar) {
                $grammar->update(['owner' => $user->id]);
            }],
            'grammar is public' => [function ($user, $grammar) {
                $grammar->update(['public_view' => true]);
            }],
            'user has right to view grammar' => [function ($user, $grammar) {
                factory(Right::class)->create([
                    'user_id' => $user->id,
                    'grammar_id' => $grammar->id,
                    'view' => true,
                ]);
            }],
        ];
    }

    public function testShowUnauthorized()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create(['public_view' => false]);
        factory(Right::class)->create([
            'user_id' => $user->id,
            'grammar_id' => $grammar->id,
            'view' => false,
            'comment' => false,
        ]);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.show', [$grammar->id]);

        $this
            ->actingAsApiUser($user)
            ->get($route, $this->headers('v1', $user));

        $this->assertResponseStatus(403);
    }

    /**
     * @dataProvider destroyProvider
     */
    public function testDestroy($cb)
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();
        $cb($user, $grammar);

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.destroy', $grammar->id);

        $this
            ->actingAsApiUser($user)
            ->delete($route, [], $this->headers('v1', $user));

        $this->assertResponseStatus(204);
        $this->notSeeInDatabase('grammars', [
            'id' => $grammar->id,
        ]);
    }

    public function destroyProvider()
    {
        return [
            'user is admin' => [function ($user, $grammar) {
                $user->update(['is_admin' => true]);
            }],
            'user is grammar owner' => [function ($user, $grammar) {
                $grammar->update(['owner' => $user->id]);
            }],
        ];
    }

    public function testDestroyUnauthorizedNotOwner()
    {
        $user = factory(User::class)->create();
        $grammar = factory(Grammar::class)->create();

        $route = app(UrlGenerator::class)->version('v1')
            ->route('grammars.destroy', $grammar->id);

        $this
            ->actingAsApiUser($user)
            ->delete($route, [], $this->headers('v1', $user));

        $this->assertResponseStatus(403);
    }
}
