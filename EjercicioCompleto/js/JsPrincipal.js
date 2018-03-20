$(document).ready(function () {
    $("#divSuccess").hide();
    table = $('#example').DataTable(); //Inicializamos el datatable
    $('[data-toggle="tooltip"]').tooltip(); //Todos los elementos de este tipo mostrarán un tooltip
    $('.datepicker').datepicker();
    
    $('#example tbody tr td').on("click","button",function(){ //Por cada click que se haga en el boton editar
        $("#formEditarTarea #id").val(table.row(this.parentNode.parentNode).index()).change(); // Agregamos su indice en un campo oculto
        let data = table.row(this.parentNode.parentNode).data();
        $("#formEditarTarea #nombre").val(data[0]).change();
        $("#formEditarTarea #fecha").val(data[1]).change();
        $("#formEditarTarea #asunto").val(data[2]).change();
        $("#formEditarTarea #descripcion").val(data[3]).change();
        $("#modalEdit").modal("show");
    });
    
     $("#formEditarTarea").submit(function(event){
         event.preventDefault();
         drawData(table,0,$("#formEditarTarea #nombre").val());
         drawData(table,1,$("#formEditarTarea #fecha").val());
         drawData(table,2,$("#formEditarTarea #asunto").val());
         drawData(table,3,$("#formEditarTarea #descripcion").val());
         $("#divSuccess").show();
         $("#divSuccess").delay(4000).hide( "drop", { direction: "right" }, "slow" );
         $("#modalEdit").modal("hide");
     });
     $("#formAgregarTarea").submit(function(event){
         event.preventDefault();
         table
                 .row
                 .add(
                 [
                    $("#formAgregarTarea #nombre").val(),
                    $("#formAgregarTarea #fecha").val(),
                    $("#formAgregarTarea #asunto").val(),
                    $("#formAgregarTarea #descripcion").val(),
                    '<button class="btn btn-success" data-toggle="tooltip" title="Editar tarea" onclick="editClicked(this);">Editar</button>'
                 ]
                         )
                 .draw();
         $("#divSuccess").show();
         $("#divSuccess").delay(4000).hide( "drop", { direction: "right" }, "slow" );
         $("#formAgregarTarea")[0].reset();
         $("#modalEdit").modal("hide");
     });
});
function editClicked(selector){
     $("#formEditarTarea #id").val(table.row(selector.parentNode.parentNode).index()).change(); // Agregamos su indice en un campo oculto
        let data = table.row(selector.parentNode.parentNode).data();
        $("#formEditarTarea #nombre").val(data[0]).change();
        $("#formEditarTarea #fecha").val(data[1]).change();
        $("#formEditarTarea #asunto").val(data[2]).change();
        $("#formEditarTarea #descripcion").val(data[3]).change();
        $("#modalEdit").modal("show");
}
function drawData(table,pos,value){
    table
        .cell($("#formEditarTarea #id").val(),pos) // note that you could actually pass in 'this' as the row selector!
        .data(value)
        .draw();
}