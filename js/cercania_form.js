$(document).ready(function() {
  $(".datepicker").datepicker({
    format: "dd-mm-yyyy",
    i18n: {
      months: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
      monthsShort: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
      ],
      weekdays: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado"
      ],
      weekdaysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],

      cancel: "Cancelar",
      clear: "Despejar",
      done: "Listo"
    }
  });
  $("select").formSelect();
  getOpacoHeight();
  getSelectWidth();
  getDateWidth();
  selectWidth();
  getdividerWidth();

  // End of document.ready
});

// Clicks
$("#guardar").click(function() {
  verificarCampos();
});

function getSelectWidth() {
  $(".select-wrapper").css("width", $("#container_form").width() / 2);
  $(".materialize-textarea").css("width", $("#container_form").width() / 2);
  $(".file-path.validate").css("width", $("#container_form").width() / 2);
}

function getdividerWidth() {
  $(".divider").css("width", $("#container_form").width() - 300);
}

function getOpacoHeight() {
  $("#opaco").css("height", screen.height / 2);
}

function getDateWidth() {
  $(".datepicker").css("width", $("#container_form").width() / 2);
}

//Set margin for all elements in container_form DIV
function selectWidth() {
  var x = document.getElementById("etj").querySelectorAll("div");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.marginRight = "1em";
    x[i].style.width = "300px";
    x[i].style.boxShadow = "0px 0px 5px 0px rgba(0,0,0,0.3)";
    x[i].style.padding = "7px";
  }
  $("#fecha")
    .parent()
    .css("box-shadow", "rgba(0, 0, 0, 0.3) 0px 0px 5px 0px");
  $("#fecha")
    .parent()
    .css("padding", "13px 7px 0px 7px");
  $("#lfecha").css("padding", "20px 0px 20px 7px");
}

// Si los campos estan completos convertira el cuadro de los elementos incompletos en rojo
function verificarCampos() {
  var value = true;
  $.each($(".obligatorio"), function() {
    errores = [];
    if ($(this).val() == "") {
      console.log($(this));
      swal({
        title: "Incompleto",
        text: "Te falta comepletar campos",
        icon: "error"
      });
      $(this).parent().addClass("animated bounce");
      $(this).parent().css("box-shadow", "rgba(255, 0, 0, 1) 0px 0px 5px 0px");
      $(this).parent().removeClass("animated bounce");
      value = false;

      // Si alguno de los elementos incompletos elige una opción, esto volvera el cuadro normal
      $.each($(".obligatorio"), function() {
        $(this).change(function() {
          $(this)
            .parent()
            .css("box-shadow", "");
        });
      });
    }
  });

  if (value) {
    guardarCercania();
  }
}

function getCompetenciasAndComportamientos() {
  var url = "php/cercania_form.php";
  $.post(url, { accion: "getCompetenciasAndComportamientos" }, function(data) {
    $("#competencia").append('<option value="" ></option>');
  });
}

function guardarCercania() {
  console.log("...Verificando...");
}
