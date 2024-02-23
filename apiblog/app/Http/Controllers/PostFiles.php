<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\User;
use App\Models\Post;
use App\Models\Author;
use App\Models\Category;

class PostFiles extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json(['data'=>$posts],200);
    }
    public function store(Request $request)
    {
        // Validar la solicitud y asegurarse de que los datos requeridos estén presentes
       

        // Procesar los datos recibidos
        $imageBase64 = $request->data;
        $imageParts = explode(";base64,", $imageBase64);
        $imageType = explode("/", $imageParts[0])[1]; // Obtenemos el tipo de imagen (ej. 'jpeg', 'png', etc.)
        $imageBase64 = base64_decode($imageParts[1]); // Convertir la imagen de Base64 a bytes





        $titulo = $request->titulo;
        $autor = $request->autor;
        $contenido = $request->contenido;

        // Ahora `$image` contiene los bytes de la imagen que puedes guardar o procesar según tus necesidades.

        // Ejemplo: Guardar la imagen en el sistema de archivos de Laravel
        $imageName = uniqid() . '.jpg'; // Generar un nombre único para la imagen
        $path = public_path('images/' . $imageName); // Ruta donde se almacenará la imagen
        file_put_contents($path, $imageBase64); // Guardar la imagen en el sistema de archivos
        
   
    
        // Crear una nueva instancia de Category y guardarla en la base de datos
        // Suponiendo que tengas un formulario donde seleccionas la categoría y envías su ID.
      

        $post = new Post();
        $post->autor = $autor;
        $post->title = $request->titulo;
        $post->releasedDate = now(); // Opcional: Puedes establecer la fecha de lanzamiento como la fecha actual
        $post->coverPick = 'http://127.0.0.1:8080/public/images/'.$imageName; // Ruta de la imagen guardada
        $post->content = $request->contenido;

        $post->save();

        // Puedes guardar la ruta de la imagen en la base de datos u otro almacenamiento según tu aplicación

        // Retorna una respuesta apropiada, como un código de estado HTTP 200 para éxito
        return response()->json(['message' => 'Datos recibidos correctamente'], 200);
    }
   
}