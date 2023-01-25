$("a.show-sidebar").click(function () {
    $(".fixed-sidebar-right").toggleClass("open-sidebar");
    $(".fixed-sidebar-right").toggleClass("collapes-side");
    $("a.show-sidebar").toggleClass("active");
});

$("a.res-menu").click(function () {
    $("#sidebar").toggleClass("active");
});

$(".collapes-side .nav-link").click(function () {

    if ($('.fixed-sidebar-right').hasClass('collapes-side')) {
        $(".fixed-sidebar-right").addClass("open-sidebar");
        $(".fixed-sidebar-right").removeClass("collapes-side");
        $("a.show-sidebar").addClass("active");
    }
});


$('.linked-in a').click(function () {
    $('.linked-in').toggleClass("active");
    $('.instagram').removeClass('active');
    $('.facebook').removeClass('active');
    $('.twitter').removeClass('active');
});

$('.instagram a').click(function () {
    $('.instagram').toggleClass("active");
    $('.linked-in').removeClass('active');
    $('.facebook').removeClass('active');
    $('.twitter').removeClass('active');
});

$('.facebook a').click(function () {
    $('.facebook').toggleClass("active");
    $('.linked-in').removeClass('active');
    $('.instagram').removeClass('active');
    $('.twitter').removeClass('active');
});

$('.twitter a').click(function () {
    $('.twitter').toggleClass("active");
    $('.linked-in').removeClass('active');
    $('.instagram').removeClass('active');
    $('.facebook').removeClass('active');
});

$(".edit-profile-feilds").click(function () {
    $('.info-feild input').removeAttr("disabled");
    $('.info-feild select').removeAttr("disabled");
    $('.p-btn.p-btn-bg').removeAttr("disabled");
});

$(".close-sidebar").click(function () {
    $(".tabs-area-main").removeClass("open-sidebar");
    $(".tabs-area-main").addClass("collapes-side");
});

$(".close-menu").click(function () {
    $("#sidebar").removeClass("active");
});

$(".forgot").click(function () {
    $(".forgot-area").css("display", "flex");
    $(".login-area").css("display", "none");
});

$(".back a").click(function () {
    $(".forgot-area").css("display", "none");
    $(".login-area").css("display", "flex");
});

$(".project-listing-table input:checkbox").change(function() {
    if(this.checked) {
        $('.edit-status').removeAttr("disabled");
    } else {
        if ($(".project-listing-table input:checkbox:checked").length < 1) {
            $('.edit-status').prop('disabled', true);
        }

    }
});

$(".project-data").click(function () {
    $(".project-listing-screen").hide();
    $(".project-detail-screen").show();
});

$("a.open").click(function () {
    $(".project-listing-screen").hide();
    $(".project-detail-screen").show();
});

$(".create-project").click(function () {
    $(".project-listing-screen").hide();
    $(".create-project").show();
});

$(document).ready(function() {
    $('.select2').select2();

    function iformat(icon) {
        var originalOption = icon.element;
        return $('<span><i class="bx ' + $(originalOption).data('icon') + '"></i> ' + icon.text + '</span>');
    }

    $('.icons_select2').select2({
        width: "100%",
        templateSelection: iformat,
        templateResult: iformat,
        allowHtml: true
    });
});
