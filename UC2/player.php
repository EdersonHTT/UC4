<?php

$playList =  ["うっせぇわ", "踊", "ギラギラ", "阿修羅ちゃん", "レディメイド", "新時代", "風のゆくえ", "コンデナーダ", "ルス", "イントロベルソン", "エストラーニャ", "マニアカ", "クルパ", "サイル・ジ・ミン"];

function showSongs($list){
    popen("cls", "w");
    echo "PlayList:\n\n";
    echo " -> ". join("->\n->", $list);
    echo "\n\n";
    readline("Enter to continue");
}

function addMusic($list){

    $music = readline("Add music: ");


}

while(true){
    popen("cls", "w");

    echo "=========> Welcome to the amazing PlayList! <=========\n";
    echo "
--------> Chose:
[1] - Play playlist
[2] - Show songs
[3] - Choose music by name
[4] - Choose music by number
[5] - Add music
[6] - Remove music
[7] - Leave
\n";

    $response = readline("Chose: ");

    switch($response){
        case "2":
            showSongs($playList);
        break;
        case "7":
            break;
        break;
    }

}