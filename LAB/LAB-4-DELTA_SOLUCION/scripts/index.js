$(document).ready(function () {
    loadContent('ajax/index.html');
    $("#link-home").click(function () {
        loadContent('ajax/index.html');
        resetActive();
        $(this).addClass("active");
    });
    $("#link-about").click(function () {
        loadContent('ajax/about.html');
        resetActive();
        $(this).addClass("active");
    });
    $("#link-contact").click(function () {
        loadContent('ajax/contact-us.html');
        resetActive();
        $(this).addClass("active");
    });
});

function resetActive() {
    $("#link-home").removeClass("active");
    $("#link-about").removeClass("active");
    $("#link-contact").removeClass("active");
}

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
            $("#main-content").html(data);
        },
        error: function (xhr) { // if error occured
            //alert("Error occured.please try again");
            //$(placeholder).append(xhr.statusText + xhr.responseText);
            $('body').loading('stop');
        },
        complete: function () {
            $('body').loading('stop');
        }
    });
}
