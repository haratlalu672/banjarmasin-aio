<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class userSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Administrator',
            'email' => 'admin@admin.com',
            'password' => app('hash')->make('admin'),
            'role' => 'admin',
            'telepon' => '08125067166',
            'nik' => '6732532301980007'
        ]);
    }
}
