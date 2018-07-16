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
      weekdaysShort: [
        "Dom",
        "Lun",
        "Mar",
        "Mie",
        "Jue",
        "Vie",
        "Sab"
      ],

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
}
