<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel React with Sanctum Auth</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet">
         <link rel="stylesheet" href="{{asset('css/adminlte/adminlte.min.css')}}">
         <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
         <link rel="stylesheet" href="{{asset('plugins/fontawesome-free/css/all.min.css')}}">
       
    </head>
    <body>
        <div id="app"></div>

        <script src="{{asset('js/app.js')}}"></script>
        
    </body>
</html>
