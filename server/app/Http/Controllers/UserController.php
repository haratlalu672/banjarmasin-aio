<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function index()
    {
        $getUser = User::OrderBy("id", "DESC")->paginate(10);

        $out = [
            "message" => "List User",
            "results" => $getUser
        ];

        return response()->json($out, 200);
    }

    public function store(Request $request)
    {

        $this->validate($request, [
            'name' => 'required',
            'username' => 'required',
            'email' => 'required',
            'password' => 'required',
            'role' => 'required'
        ]);

        $data = [
            'name' => $request->input('name'),
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'password' => app('hash')->make($request->input('password')),
            'role' => $request->input('role'),
        ];

        $insert = User::create($data);

        if ($insert) {
            $out  = [
                "message" => "Berhasil Menambahkan Data",
                "results" => $data,
                "code"  => 200
            ];
        } else {
            $out  = [
                "message" => "Gagal Menambahkan Data",
                "results" => $data,
                "code"   => 404,
            ];
        }

        return response()->json($out, $out['code']);
    }
    public function update(Request $request, $id)
    {

        $this->validate($request, [
            'name' => 'required',
            'username' => 'required',
            'email' => 'required',
            'password' => 'required',
            'role' => 'required'
        ]);

        $data = [
            'name' => $request->input('name'),
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'password' => app('hash')->make($request->input('password')),
            'role' => $request->input('role'),
        ];

        $user = User::findOrfail($id);

        $update = $user->update($data);

        if ($update) {
            $out  = [
                "message" => "Sukses Update Data",
                "results" => $data,
                "code"  => 200
            ];
        } else {
            $out  = [
                "message" => "Gagal Update Data",
                "results" => $data,
                "code"   => 404,
            ];
        }

        return response()->json($out, $out['code']);
    }

    public function destroy($id)
    {
        $users =  User::findOrFail($id);

        if (!$users) {
            $data = [
                "message" => "User Tidak Ditemukan",
            ];
        } else {
            $users->delete();
            $data = [
                "message" => "User Berhasil Dihapus"
            ];
        }

        return response()->json($data, 200);
    }

    public function detail($id)
    {
        $getUser = User::query()->where('id', $id)->get();

        $out = [
            "message" => "profil user",
            "results" => $getUser
        ];

        return response()->json($out, 200);
    }
}
