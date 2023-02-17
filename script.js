$(document).ready(function () {
    alert("Закончи работу " + jQuery.fn.jquery);
});
$(".dws-form").on("click", ".tab", function () {
    // Удаляем классы active
    $(".dws-form .tab").removeClass('active');

    // Добавляем классы active
    $(this).addClass('active');
});
// Удаляем классы active
$(".dws-form").find(".active").removeClass("active");
console.log($(this).index());
// Добавляем класс active
$(this).addClass("active");
$(".tab-form").eq($(this).index()).addClass("active");