<?php
/**
 * Created by PhpStorm.
 * User: edwinsturt
 * Date: 2020-06-24
 * Time: 00:45
 */

$file = $argv[1];

if(file_exists($file)) {
    $json = json_decode(file_get_contents($file));

    $directories = [];

    foreach ($json->sources as $index => $source) {

        $dir = dirname($source);
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }
        $data = explode('/', $source);
        $file = end($data);
        file_put_contents($dir . "/" . $file, $json->sourcesContent[$index]);
        $files[] = $dir . "/" . $file;

    }
    echo "<pre>All Source codes has been extracted from map file ";
    print_r($files);
}




