<?php

$playList =  ["うっせぇわ", "踊", "ギラギラ", "阿修羅ちゃん", "レディメイド", "新時代", "風のゆくえ", "コンデナーダ", "ルス", "イントロベルソン", "エストラーニャ", "マニアカ", "クルパ", "サイル・ジ・ミン"];

function advance($list, &$index){

    if($index < count($list)-1){
        $index++;
    } else {
        $index = 0;
    }

}

function retreat($list, &$index){

    if($index > 0){
        $index--;
    } else {
        $index = count($list)-1;
    }
}

function play($list, $index){

    while(true){
        popen("cls", "w");

        echo "Playing: " . $list[$index] . "\n";
        echo "
--------> Choose:
[1] - Advance
[2] - Rewind
[3] - Back
\n";

        $response = readline("Choose: ");
        
        if($response === "1"){

            advance($list, $index);
        } else if ($response === "2"){

            retreat($list, $index);
        } else if ($response === "3"){

            return;
        }

    }

}

function showSongs($list){
    popen("cls", "w");
    echo "PlayList:\n\n";
    foreach($list as $i => $v){
        echo $i+1 . " -> " . $v . "\n";
    }
    echo "\n\n";
    readline("Enter to continue");
}

function chooseByName($list, &$index){
    popen("cls", "w");
    foreach($list as $i => $v){
        echo $i+1 . " -> " . $v . "\n";
    }
    echo "\n";
    $position = array_search(readline("Choose a music: "), $list);
    if($position){

        $index = (int)$position;

    } else {
        return;
    }

    play($list, $index);
}

function chooseByNumber($list, &$index){
    popen("cls", "w");
    foreach($list as $i => $v){
        echo $i+1 . " -> " . $v . "\n";
    }
    echo "\n";
    $position = (int)readline("Choose a music: ");
    if($position != "NaN" && $position <= count($list)){

        $index = $position-1;

    } else {
        return;
    }
    play($list, $index);
}

function chooseByRandom($list, &$index){
    $index = rand(0, count($list)-1);

    play($list, $index);
}

function addMusic(&$list){
    popen("cls", "w");
    $music = readline("Add music: ");
    array_push($list, $music);
    popen("cls", "w");
    echo "Music added: $music";
    sleep(2);
}

function removeMusic(&$list){
    popen("cls", "w");
    foreach($list as $i => $v){
        echo $i+1 . " -> " . $v . "\n";
    }
    echo "\n\n";

    $music = readline("Choose a song by number or name to remove: ");
    $index = array_search($music, $list);

    if($index){

        array_splice($list, $index, 1);

    } else {
        $local = (int)$music -1;
        if($local < count($list)){

            $music = $list[$local];
            array_splice($list, $local, 1);
        } else {
            return;

        }
    }

    popen("cls", "w");
    echo "Music removed: $music";
    sleep(2);
}

$on = true;
$index = 0;

while($on){
    popen("cls", "w");

    echo "=========> Welcome to the amazing PlayList! <=========\n";
    echo "
--------> Choose:
[1] - Play playlist
[2] - Show songs
[3] - Choose music by name
[4] - Choose music by number
[5] - Choose music by random
[6] - Add music
[7] - Remove music
[8] - Leave
\n";

    $response = readline("Choose: ");

    switch($response){
        case "1":
            play($playList, $index);
        break;
        case "2":
            showSongs($playList);
        break;
        case "3":
            chooseByName($playList, $index);
        break;
        case "4":
            chooseByNumber($playList, $index);
        break;
        case "5":
            chooseByRandom($playList, $index);
        break;
        case "6":
            addMusic($playList);
        break;
        case "7":
            removeMusic($playList);
        break;
        case "8":
            $on = false;
            popen("cls", "w");
        break;
    }

}