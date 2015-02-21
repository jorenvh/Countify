<?php namespace thunder\Countify;

class Countify {

    /**
     * Count the words of a given text and encode it for json
     *
     * @param $text
     * @return string
     */
    public function countWords($text)
    {
        return json_encode( str_word_count($text) );
    }

}