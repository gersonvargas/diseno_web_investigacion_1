$(document).ready(function(){
    $("#onclick").click(function(){
        alert("evento click");
    });
    $("#change").change(function(){
        alert("evento change");
    });
    $("#blur").change(function(){
        alert("evento blur");
    });
    $("#mouseenter").mouseenter(function(){
        alert("evento mouseenter");
    });
    $("#mouseenter").mouseout(function(){
        alert("evento mouseout");
    });
    $("#btnFocus").click(function(){
        $("#focus").focus();
    });
    $("#btnContenido1").click(function(){
        loadContent('ajax/contenido1.html');
    });
   $("#btnContenido2").click(function(){
        loadContent('ajax/contenido2.html');
    });
});
function loadContent(url) {
    $.ajax({
        url: url,
        dataType: 'html',
        beforeSend: function () {
            $('body').loading({
                stoppable: true,
                message: 'Cargando...'
            });
        },
        success: function (data) {
            $("#text-container").html(data);
        },
        error: function (xhr) {
            alert(xhr.statusText + xhr.responseText);
            $('body').loading('stop');
        },
        complete: function () {
            $('body').loading('stop');
        }
    });
}