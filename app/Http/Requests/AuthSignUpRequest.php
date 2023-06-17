<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthSignUpRequest extends FormRequest
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
            'password' => 'required|min:8|max:16',
            'email' => 'required|unique:users,email',
            'username' => 'unique:users,username|required|max:30|min:2',
        ];
    }

    public function messages(): array
    {
        return [
            'password.required' => 'Password is required',
            'password.min' => 'Password must be at least 8 characters',
            'password.max' => 'Password can not exceed 16 characters',
            'email.required' => 'Password is required',
            'email.unique' => 'Email already registered',
            'username.max' => 'Username maksimal :max karakter',
            'username.min' => 'Username minimal 1 karakter',
            'username.unique' => 'Username tidak tersedia',
        ];
    }
}
