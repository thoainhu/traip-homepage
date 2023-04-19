$(function () {
  $(".header .itemOther .iconmenu").click(function () {
    $(this).closest(".header").find(".itemMenu-mobile").toggleClass("active")
    $(".sub-menu").slideUp()
    $(".menudown").removeClass("active")
    $(".sub-menu-2").slideUp()
    $(".menudown2").removeClass("active")
  })
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
  $(".popup-search .overlay i").click(function () {
    $(".popup-search").removeClass("active")
  })
})
let header = document.querySelector(".header")
let topheader = document.querySelector(".topheader")
let fixedtop = document.querySelector(".fixed-top")
let backtop = document.querySelector(".back-top")

window.onscroll = function () {
  let value = window.scrollY
  if (value > 10) {
    header.classList.add("fixed")
    header.classList.add("active")
    topheader.classList.add("fixed")
    fixedtop.classList.add("fixed")
    backtop.classList.add("active")
  } else {
    header.classList.remove("fixed")
    header.classList.remove("active")
    topheader.classList.remove("fixed")
    fixedtop.classList.remove("fixed")
    backtop.classList.remove("active")
  }
}
backtop.onclick = function () {
  window.scroll(0, 0)
}
