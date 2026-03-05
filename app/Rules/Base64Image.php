<?php

namespace App\Rules;

use Illuminate\Support\Str;
use Illuminate\Contracts\Validation\InvokableRule;

class Base64Image implements InvokableRule
{
    /**
     * Run the validation rule.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     * @return void
     */
    public function __invoke($attribute, $value, $fail)
    {
        if (!is_string($value)) {
            $fail('The :attribute must be an image.');
        }
        //  Check if the value is a base64 string
        $string = preg_replace('/data:image\/[a-zA-Z0-9]+;base64,/', '', $value);
        $string = str_replace(' ', '+', $string);
        $decoded = base64_decode($string, true);

        //  check if the decoded base64 string is an image and has 'data:image' string
        if (Str::startsWith($value, 'data:') && (!Str::startsWith($value, 'data:image') || base64_encode($decoded) !== $string)) {
            $fail('The :attribute must be an image.');
        }
    }
}
