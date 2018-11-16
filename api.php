<?php


header('Content-Type: application/json');
		$server = "localhost";
	$usuariobd = "root";
	
	$BD="sitp";
	$PASSBD="DNA123@";

$conexion= mysqli_connect($server, $usuariobd,$PASSBD)or die("No se pudo conectar con el server de BD") ;//aca la clave contraseña
	   //echo "estoy conectado a MySQL";
	   // 2) seleccionar BD con la que se va a trabajar.
	   mysqli_select_db($conexion, $BD) or die ("no se ha seleccionado la BD");
	    $consulta ="SELECT * FROM buses";
	    $comp=mysqli_query($conexion, $consulta)or die("No se pudo consultar") ;
	  // $comp3=mysqli_fetch_array($comp1);
	   //$comp3= $comp3["Valor"]
	   $a=0;
	   if (mysqli_num_rows($comp)>0){
		   while($comp1 = mysqli_fetch_array($comp)){
			   $data1[]=$comp1['numbus'];
			   $data2[]=$comp1['latitud'];
			   $data3[]=$comp1['longitud'];
			   $a=$a+1;
	   }
	   $b=0;
	  
		   while ($b<=$a-1){
			   $ubica[$b]=[floatval($data2[$b]),floatval($data3[$b])];
			   	$b=$b+1;		   
		   }
		   
		   
		   $data1=json_encode($data1);
		   $data=json_encode($ubica);
		  
		   //echo $data1;
		   echo $data;
		
		   
	   }
	



    
  ?>