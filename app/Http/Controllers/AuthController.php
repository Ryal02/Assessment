<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Validation\ValidatesRequests;


class AuthController extends Controller
{
    public function register(request $request) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email',
            'password' => 'required|string|min:6',
            'repeatpwd' => 'required|min:6|same:password'
        ], [
            'email.required' => 'E-Mail is required',
            'email.email' => 'Must be a valid E-Mail address.',
            'password.required' => 'Password is required',
            'password.min' => 'Password must be at least 6 characters',
            'repeatpwd.required'=>'Confirm Password Required!',
            'repeatpwd.min'=>'Password must be at least 6 characters',
            'repeatpwd.same'=>'Passwords dont Match.'
        ]);

        if($validator->fails()) {
            return response()->json([
                "error" =>$validator->errors()->first()
            ]);

        } else {
            if(User::all()->where('email', $request->input('email'))->first() != null) {
                return response()->json([
                    'failed'=>'E-Mail already Exist'
                ]);
            } else {

                $user = new User;
                $user->name = $request->input('name');
                $user->email = $request->input('email');
                $user->password = Hash::make($request->input('password'));
                $user->save();

                $token = $user->createToken('myapptoken')->plainTextToken;
                
                return response()->json(['success'=>'Registered Successfully!']);
            }
        }
    }


    public function login(request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:6'
        ], [
            'email.required' => 'E-Mail is required',
            'email.email' => 'Must be a valid E-Mail address.',
            'password.required' => 'Password is required',
            'password.min' => 'Password must be at least 6 characters'
        ]);

        if($validator->fails()) {
            return response()->json([
                'error'=>$validator->errors()->first()
            ]);
        } else {
            //Check email
            $user = User::where('email', $request->input('email'))->first();

            //Check password
            if(!$user || !Hash::check($request->input('password'), $user->password)){

                return response()->json(['failed'=>'Bad Credentials!']);
            }

            $token = $user->createToken('myapptoken')->plainTextToken;
            return response()->json(['success'=>'Successfully Login!']);


        }

    }


    public function logout(request $request) {

        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out'
        ];
    }
    
}
