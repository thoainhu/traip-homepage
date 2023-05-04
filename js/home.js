$(function () {
  $(document).ready(function () {
    $(".favorite .list .choosing .choosing-title ").hover(
      function () {
        $color = $(this).find("h3").attr("datacolor");
        $(this).css("background-color", $color);
        $(this).find("h3").css("color", "white");
      },
      function () {
        $(this).css("background-color", "white");
        $(this).find("h3").css("color", $color);
      }
    );
  });
  $("#datepicker").datepicker();
  $(".selectbooking .item .title").click(function () {
    $(this).parent().find(".selectize").toggleClass("active");
    $(this).parent().siblings().find(".selectize").removeClass("active");
  });
  $(".tablebooking  .selectbooking .selectize .option").click(function () {
    $chooseWhere = $(this).text();
    $where = $(this).closest(".item").find(".title .writePlace p").text($chooseWhere);
    $(this).closest(".selectize").removeClass("active");
    $(this).closest(".item").find("input").addClass("active");
    $(this).closest(".item").find(".title .writePlace").addClass("active");
  });
});
