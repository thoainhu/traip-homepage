$(function () {
  $(".header .itemMenu-mobile .itemMenu-item .menudown").click(function () {
    $(this).toggleClass("active")
    $(this).closest(".itemMenu-item").siblings().find(".menudown").removeClass("active")
    $(this).parent().find(".sub-menu").slideToggle()
    $(this).parent().siblings().find(".sub-menu").slideUp()
  })
  $(".header .itemMenu-mobile .itemMenu-item .sub-menu .sub-menu-item .menudown2").click(function () {
    $(this).toggleClass("active")
    $(this).closest(".sub-menu-item").siblings().find(".menudown2").removeClass("active")
    $(this).parent().find(".sub-menu-2").slideToggle()
    $(this).parent().siblings().find(".sub-menu-2").slideUp()
  })
  $(".header .itemOther  .iconmenu").click(function () {
    $(this).toggleClass("active")
  })

  $(".header .btn-search").click(function () {
    $(".popup-search").addClass("active")
  })
  $(".popup-search i").click(function () {
    $(".popup-search").removeClass("active")
  })
  $(".popup-search i").click(function () {
    $(".popup-search").removeClass("active")
  })
})
let header = document.querySelector(".header")
let topheader = document.querySelector(".topheader")
let fixedtop = document.querySelector(".fixed-top")
window.onscroll = function () {
  let value = window.scrollY
  if (value > 10) {
    header.classList.add("fixed")
    topheader.classList.add("fixed")
    fixedtop.classList.add("fixed")
  } else {
    header.classList.remove("fixed")
    topheader.classList.remove("fixed")
    fixedtop.classList.remove("fixed")
  }
}
