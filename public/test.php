<?
	include "vk_api.php";
  $token="f2d1b5129524e804891b988b1d7fcaeb124f5ecea2784d9f10c852dcbfb6aa8c705c5a81fa5c1e9a87918";
  $vk = new vk_api($token,"5.81");
  $from_id = 380925999;
  print_r($vk->getUser($from_id))
?>