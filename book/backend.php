<?php
$id=$_GET["id"];
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://booksrun.com/api/price/sell/'.$id.'?key=kxd0vzaik5f8jnsngzbn',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

?>
