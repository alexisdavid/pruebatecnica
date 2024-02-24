<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\User;
use App\Models\Post;
use App\Models\Author;
use App\Models\Category;
use Illuminate\Support\Facades\Log;
class PostFiles extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json(['data'=>$posts],200);
    }
    public function store(Request $request)
    {
        
        $imageBase64 = $request->data;
        $imageParts = explode(";base64,", $imageBase64);
        $imageType = explode("/", $imageParts[0])[1]; 
        $imageBase64 = base64_decode($imageParts[1]); 
        
        $titulo = $request->titulo;
        $autor = $request->autor;
        $contenido = $request->contenido;

        $imageName = uniqid() . '.jpg'; 
        $path = public_path('images/' . $imageName);

        file_put_contents($path, $imageBase64); 
        $imageUrl = asset('images/' . $imageName);
        $post = new Post();
        $post->autor = $autor;
        $post->title = $request->titulo;
        $post->releasedDate = now();
        $post->coverPick = $imageUrl;
        $post->content = $request->contenido;

        $post->save();

        return response()->json(['message' => 'Datos recibidos correctamente'], 200);
    }
   
}