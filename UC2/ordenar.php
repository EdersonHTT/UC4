<?php

// function ordenar(&$list){

//     for($i = 0; $i < count($list); $i++){

//         for($o = 0; $o < count($list); $o++){

//             if($list[$i] < $list[$o]){

//                 $guardar = $list[$i];
//                 $list[$i] = $list[$o];
//                 $list[$o] = $guardar;
//             }
//         }
//     }

//     return $list;
// }

// $lista = [0, 7, 1, 6, 2, 7];
// ordenar($lista);
// echo join(" - ", $lista);

//====================> 1)

// function somarMatriz($ma1, $ma2){

//     $matriz = [];
//     for($i = 0; $i < count($ma1); $i++){
//         $xY = [];
//         for($k = 0; $k < count($ma1[$i]); $k++){
//             $xY[$k] = $ma1[$i][$k] + $ma2[$i][$k];

//         }
//         array_push($matriz, [$xY[0], $xY[1]]);
//     }

//     return $matriz;
// }

// $matriz1 = [[1, 2], [2, 3]];
// $matriz2 = [[2, 3], [1, 2]];

// $matrizSomada = somarMatriz($matriz1, $matriz2);

// echo json_encode($matrizSomada);

//====================> 2)

function achar($mat, $valor){

    $local = [];

    for($i = 0; $i < count($mat); $i++){

        for($k = 0; $k < count($mat[$i]); $k++){

            if($mat[$i][$k] === $valor){

                array_push($local, [
                    
                    "coluna" => $k,
                    "linha" => $i
                ]);
            }
        }
    }

    return json_encode($local);
}

$matriz = [
    [1, 3, 10, 7],
    [4, 2, 6, 8],
    [20, 2, 12, 13]
];

echo achar($matriz, 2);