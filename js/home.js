$(function () {
  $(document).ready(function () {
    $(".favorite .list .choosing").hover(
      function () {
        $color = $(this).find("h3").attr("datacolor")
        $(this).css("background-color", $color)
        $(this).find("h3").css("color", "white")
      },
      function () {
        $(this).css("background-color", "white")
        $(this).find("h3").css("color", $color)
      }
    )
  })
})
