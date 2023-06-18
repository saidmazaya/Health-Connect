<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleAdminRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'max:70|required',
            'description' => 'max:250|required',
            'content' => 'required',
            'photo' => 'image|max:5000',
            'author_id' => 'required',
            'slug' => 'unique',
            'category_id' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Kolom title wajib diisi',
            'title.max' => 'Kolom title Maksimal :max Karakter',
            'description.required' => 'Kolom description wajib diisi',
            'description.max' => 'Kolom description Maksimal :max Karakter',
            'content.required' => 'Kolom content wajib diisi',
            'photo.image' => 'File Wajib Bertipe jpg, jpeg, png, bmp, gif, svg, or webp',
            'photo.max' => 'Ukuran File Maksimal :max KB',
            'author_id.required' => 'Kolom author_id wajib diisi',
            'category_id.required' => 'Category Wajib Dipilih'
        ];
    }
}
