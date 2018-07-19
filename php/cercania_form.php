<?php
  include "conexion.php";

  if(isset($_POST["accion"])){

    if($_POST["accion"] == "getCompetenciasAndComportamientos"){
      getCompetenciasAndComportamientos();
    }

    if($_POST["accion"] == "getGestores"){
      getGestores();
    }

    if($_POST["accion"] == "getMunicipio"){
      getMunicipio();
    }

    if($_POST["accion"] == "getEstrategias"){
      getEstrategias();
    }

    if($_POST["accion"] == "getTemas"){
      getTemas();
    }
  }

  function getCompetenciasAndComportamientos(){
    include "conexion.php";

    $data = array("mensaje" => "", "error" => 0, "html" => "");

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

  function getMunicipio(){
    include "conexion.php";

    $data = array("mensaje" => "", "error" => 0, "html" => "");

    $sql = "SELECT id_municipio, municipio 
    FROM municipios";

    if($rs = $con->query($sql)){
      if($filas = $rs->fetchAll(PDO::FETCH_ASSOC)){
        $data['html'] = $filas;
      }else{
        print_r($conexion->errorInfo());
        $data['mensaje'] = "No se realizo la consulta";
        $data['error'] = 1;
      }
    }
    echo json_encode($data);
  }

  function getGestores(){
    include "conexion.php";

    $data = array("mensaje" => "", "error" => 0, "html" => "");

    $sql = "SELECT numeroidentificacion, (nombres || ' ' || apellidos) as nombre, foto_url
    FROM personas
    WHERE foto_url NOT LIKE ''";

    if($rs = $con-> query($sql)){
      if($filas = $rs->fetchAll(PDO::FETCH_ASSOC)){
        $data['html'] = $filas;
      }else{
        print_r($conexion->errorInfo());
        $data['mensaje'] = "No se realizo la consulta";
        $data['error'] = 1; 
      }
    }
    echo json_encode($data);
  }

  function getEstrategias(){
    include "conexion.php";

    $data = array("mensaje" => "", "error" => 0, "html" => "");

    $sql = "SELECT id_estrategia, nombreestrategia
    FROM estrategias";

    if($rs = $con->query($sql)){
      if($filas = $rs->fetchAll(PDO::FETCH_ASSOC)){
        $data['html'] = $filas;
      }else{
        print_r($conexion->errorInfo());
        $data['mensaje'] = "No se realizo la consulta";
        $data['error'] = 1;
      }
    }
    echo json_encode($data);
  }

  function getTemas(){
    include "conexion.php";

    $data = array("mensaje" => "", "error" => 0, "html" => "");

    $sql = "SELECT id_temas, temas 
    FROM temas";

    if($rs = $con->query($sql)){
      if($filas = $rs->fetchAll(PDO::FETCH_ASSOC)){
        $data['html'] = $filas;
      }else{
        print_r($conexion->errorInfo());
        $data['mensaje'] = "No se realizo la consulta";
        $data['error'] = 1;   
      }
    }
    echo json_encode($data);
  }
?>