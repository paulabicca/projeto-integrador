<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-with");
header("Content-Type: application/json; charset=utf-8");

include "config/config.php";

$postjson = json_decode(file_get_contents('php://input'),true);
$today = date ('Y-m-d');

if($postjson['aksi']=='register'){

  $query = mysqli_query($mysqli, "INSERT INTO master_user SET
    username = '$postjson[username]',
    password = '$postjson[password]',
    status = 'y',
    created_at = '$today'
  ");

  $idcust = mysqli_insert_id($mysqli);

  if($query) $result = json_encode(array('sucess' => true, 'customerid' => $idcust));
  else $result = json_encode(array('sucess' => false, 'msg'=> 'erro, tente novamente'));

  echo $result;

}elseif($postjson['aksi']=='login'){
 
  $query = mysqli_query($mysqli, "SELECT * FROM master_user WHERE username = '$postjson[username]' AND password = '$postjson[password]'");
  $check = mysqli_num_rows($query);
  if($check > 0){
    $data = mysqli_fetch_array($query);
    $datauser = array(
      'user_id' => $data['user_id'],
      'username' => $data['username'],
      'password' => $data['password'],
    );

    if($data['status'] == 'y'){
      $result = json_encode(array('sucess'=>true, 'result' => $datauser));
    }else{
      $result = json_encode(array('sucess'=>false, 'msg' =>  'Conta inativa'));
    }
  }else if($check <= 0){
    $result = json_encode(array('sucess'=>false, 'msg' =>  'Conta não registrada'));
  }
  echo $result;

}
?>