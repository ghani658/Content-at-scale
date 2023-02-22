$("a.show-sidebar").click(function () {
    $(".fixed-sidebar-right").toggleClass("open-sidebar");
    $(".fixed-sidebar-right").toggleClass("collapes-side");
    $(".project-bar").toggleClass("container-open-sidebar");
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
    $('.p-btn').removeAttr("disabled");
});

$(".close-sidebar").click(function () {
    $(".tabs-area-main:not(.project-bar)").removeClass("open-sidebar");
    $(".tabs-area-main:not(.project-bar)").addClass("collapes-side");
    $(".project-bar").toggleClass("container-open-sidebar");
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

$(".customize-btn").click(function () {
    $(".custom-keyword").addClass('keyword-edit');
});

$(".cancel-customize").click(function () {
    $(".custom-keyword").removeClass('keyword-edit');
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

    $(".tags-select").select2({
        tags: true,
        tokenSeparators: [',', ' ']
    })
});

function togglePasswordVisibility($pw, on) {
    $pw.attr('type', on ? 'password' : 'text');
}
$(document).ready(function() {
    $('[data-id]').on('click', function() {
      const $this = $(this);
      const id = $this.data('id')
      const $pw = $(`#${id}`);

      if('password' == $pw.attr('type')){
        togglePasswordVisibility($pw, false);
        $this.children("i").removeClass('bx-show').addClass('bx-hide');
        }else{
            togglePasswordVisibility($pw, true);
            $this.children("i").addClass('bx-show').removeClass('bx-hide');
        }
    });
  });

$('.toggleFields').on('click', function(){
    $(this).hide()
    $(this).parent().siblings('.showSpanonClick').hide()
    $(this).parent().siblings('.showFieldonClick').toggle().children('input, textarea').focus();
})

$('.showFieldonClick input, .showFieldonClick textarea').on('blur', function(){
    $(this).parent('.showFieldonClick').hide()
    $(this).parent('.showFieldonClick').parent().children('.showSpanonClick').text($(this).val())
    $(this).parent('.showFieldonClick').parent().children('.showSpanonClick').show()
    $(this).parent('.showFieldonClick').parent().children().children('.toggleFields').show()
})

$(".view-all-suspects").click(function () {
    $(this).addClass('active');
    $(".remove-all-suspects").removeClass('active');
});

$(".remove-all-suspects").click(function () {
    $(this).addClass('active');
    $(".view-all-suspects").removeClass('active');
});

//slider Jquery

$prev = '<a href="" class="prev"><img src="assets/images/ac-arrow.svg" alt=""></a>';
$next = '<a href="" class="next"><img src="assets/images/ac-arrow.svg" alt=""></a>';

$(document).ready(function(){
    $('.tag-slider').slick({
        dots: false,
        infinite: false,
        speed: 100,
        slidesToShow: 5,
        variableWidth: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: $prev,
        nextArrow: $next,
    });
    $('.tag-slider2').slick({
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: $prev,
        nextArrow: $next,
    });
    $(".slides").slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $prev,
        nextArrow: $next,
    });
});    

$('button[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
    $('.slides').slick('setPosition');
})

$('input[type=file]').change(function () {
    fileCount = this.files.length;
    if(fileCount){
        $('#selectColumns').modal('show');
        $('#keywordUpload').modal('hide');
        $('#addContent').modal('hide');
    }
});

$('.edit-text a').on('click', function(){
    $(this).parent().parent().hide();
    $(this).parent().parent().siblings('.edit-fields').show();
})
$('.plans-listing a').on('click', function(){
    $(".plans-listing a").removeClass('active');
    $(this).addClass('active');
})
$('#sync-wordPress').change(function () {                
    $('.wp-status').toggle(this.checked);
}).change();

$(".hide-custom").click(function () {
  $('#customHeading_s').modal('hide');
});

$("#open-customize").click(function () {
  $('.customizion-brief').show();
});

$("#close-customize").click(function () {
  $('.customizion-brief').hide();
});

$('.single-image input:checkbox').change(function(){
  if($(this).is(":checked")) {
      $(this).parent().addClass("active");
  } else {
    $(this).parent().removeClass("active");
  }
});

$(".search-area a").click(function () {
  $(".search-field").show();
});

$("a.hide-search").click(function () {
  $(".search-field").hide();
});

$(document).ready(function () {
    $('.datepicker').datepicker();
});

// Chart js 

// chart 1 

var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area',
  toolbar: {
      show: false
  }
},
colors: ["#F7C02B", "#674EF2"],
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

//   chart 2

var options = {
    series: [{
    data: [21, 22, 10, 21, 22, 10]
  }],
    chart: {
    height: 75,
    type: 'bar',
    events: {
      click: function(chart, w, e) {
        // console.log(chart, w, e)
      }
    },
    toolbar: {
        show: false
    }
  },
  colors: ["#FFE59D", "#FFE59D"],
  plotOptions: {
    bar: {
      columnWidth: '35%',
      distributed: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  grid: {
    show: false, 
    xaxis: {
      lines: {
        show: false
       }
     },  
    yaxis: {
      lines: { 
        show: false
       }
     },   
  },
  xaxis: {
    categories: [
      ['John', 'Doe'],
      ['Joe', 'Smith'],
      ['Jake', 'Williams'],
    ],
    labels: {
      show: false,  
      style: {
        colors: ["#FF1654", "#247BA0"],
        fontSize: '12px'
      }
    }
  },
  yaxis: {
    labels: {
        show: false, 
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#line-chart"), options);
  var chart2 = new ApexCharts(document.querySelector("#line-chart2"), options);
  var chart3 = new ApexCharts(document.querySelector("#line-chart3"), options);
  var chart4 = new ApexCharts(document.querySelector("#line-chart4"), options);
  var chart5 = new ApexCharts(document.querySelector("#line-chart5"), options);
  var chart6 = new ApexCharts(document.querySelector("#line-chart6"), options);
  chart.render();
  chart2.render();
  chart3.render();
  chart4.render();
  chart5.render();
  chart6.render();

  // chart 3 

      
  var options = {
    series: [ {
    name: 'series2',
    data: [32, 12, 35, 22, 37, 20, 31]
  }],
    chart: {
    height: 30,
    type: 'area',
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  colors: ["#22D5C0"],
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  grid: {
    show: false, 
    xaxis: {
      lines: {
        show: false
       }
     },  
    yaxis: {
      lines: { 
        show: false
       }
     },   
  },
  yaxis: {
    labels: {
        show: false, 
    }
  },
  xaxis: {
    labels: {
        show: false, 
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#leaderboard"), options);
  var chart2 = new ApexCharts(document.querySelector("#leaderboard2"), options);
  var chart3 = new ApexCharts(document.querySelector("#leaderboard3"), options);
  var chart4 = new ApexCharts(document.querySelector("#leaderboard4"), options);
  var chart5 = new ApexCharts(document.querySelector("#leaderboard5"), options);
  chart.render();
  chart2.render();
  chart3.render();
  chart4.render();
  chart5.render();