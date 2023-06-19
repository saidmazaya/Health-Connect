<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DiscussionCreateRequest extends FormRequest
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
            'content' => 'required',
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
            'content.required' => 'Kolom content wajib diisi',
            'author_id.required' => 'Kolom author_id wajib diisi',
            'category_id.required' => 'Category Wajib Dipilih'
        ];
    }
}
