<?php
  include "conexion.php";

  if(isset($_POST["accion"])){
    if($_POST["accion"] == getCompetenciasAndComportamientos){
      getCompetenciasAndComportamientos();
    }
  }

  function getCompetenciasAndComportamientos(){
    include "conexion.php";

    $data = array("mensaje" => "", "error" => 0, "data" => "");

    if($con){
      $sql = "SELECT cpc.competencias_id_competencia, cpc.comportamientos_id_comportamientos, cme.competencia, cmp.comportamientos
      FROM competencias_por_comportamiento as cpc
      JOIN comportamientos as cmp ON cmp.id_comportamientos = cpc.comportamientos_id_comportamientos
      JOIN competencias as cme ON cme.id_competencia = cpc.competencias_id_competencia";

      if($rs = $con->query($sql)){
        if($filas = $rs->fetchAll(PDO::FETCH_ASSOC)){
          $data["html"] = $filas;
        }else{
          print_r($conexion->errorInfo());
          $data['mensaje'] = "No se realizo la consulta";
          $data['error'] = 1;
        }
      }
    }
    echo json_encode($data);
  }
?>