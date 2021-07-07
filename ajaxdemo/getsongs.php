<?php

$song1 = array('id'=>1, 'artist'=>'Milk Bear', 'title'=>'Not interested in him');
$song2 = array('id'=>2, 'artist'=>'Mocha Bear', 'title'=>'Why doesn\'t she love me?');
$song3 = array('id'=>3, 'artist'=>'Tenko', 'title'=>'Degenerate Males');
$song4 = array('id'=>4, 'artist'=>'Himiko', 'title'=>'Nyeh');
$song5 = array('id'=>5, 'artist'=>'Kaito', 'title'=>'Maki Roll');

$arr_list = [$song1, $song2, $song3, $song4, $song5];

header('Content-type: application/json');
echo json_encode($arr_list);

?>