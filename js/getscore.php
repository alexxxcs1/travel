<?php 
	require ('Database/Client.php');
	mysql_select_db("startravel", $con);
	$result = mysql_query("SELECT * FROM startravel.rank  ORDER by allm DESC");

	if($result)   
		{   
		  
		//  $array=mysql_fetch_array($result,MYSQL_ASSOC);  
		      
		          
		    //数据集 
		 
		    $users=array(); 
		    $i=0; 
		    while($row=mysql_fetch_array($result,MYSQL_ASSOC)){ 
		 
		            $users[$i]=$row; 
		            $i++; 
		 
		    } 
		        echo json_encode(array('dataList'=>$users)); 
		  
		  
		    /*单条数据*/  
		  
/*		    $row=mysql_fetch_row($result,MYSQL_ASSOC);  
		      
		    echo json_encode(array('jsonObj'=>$row));  */
		}else
		{
			echo "string";
		}   
	/*while($row = mysql_fetch_array($result))
	  {
	  echo $row['ip'] . " " . $row['name']." ".$row['nm']." ".$row['cm']." ".$row['allm'];
	  echo "<br />";
	  }*/
	 mysql_close($con);
 ?>