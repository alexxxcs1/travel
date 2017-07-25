<?php 
	require ('Database/Client.php');
	$ip=$_GET["ip"];
	$nm=$_GET["nm"];
	$cm=$_GET["cm"];
	$allm=$_GET["allm"];
	mysql_select_db("startravel", $con);
	$result = mysql_query("SELECT * FROM startravel.rank where ip='".$ip."' group by allm DESC");

	$row=mysql_fetch_row($result,MYSQL_ASSOC);  
		      

	if (mysql_num_rows($result)<1) {
		
		mysql_query("INSERT INTO startravel.rank (ip, nm , cm ,allm) VALUES ('".$ip."', '".$nm."', '".$cm."','".$allm."')");

	}else
	{
		if ($row['allm']<$allm) {
			mysql_query("UPDATE startravel.rank SET nm = '".$nm."' WHERE ip = '".$ip."'");
			mysql_query("UPDATE startravel.rank SET cm = '".$cm."' WHERE ip = '".$ip."'");
			mysql_query("UPDATE startravel.rank SET allm = '".$allm."' WHERE ip = '".$ip."'");
		}else
		{
			
		}
/*		*/
	}
	 mysql_close($con);
	
 ?>