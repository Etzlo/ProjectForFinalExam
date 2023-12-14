// Switch
// Функция для плавного переключения между секциями
function switchSection(sectionId) {
    $(".section.active").fadeOut(300, function () {
        $(this).removeClass("active");
        $("#" + sectionId).addClass("active").fadeIn(300);
    });
}

// Обработчики событий для кнопок
$(".top-link").on("click", function () {
    switchSection("top");
});

$(".about-link").on("click", function () {
    switchSection("about");
});

$(".contacts-link").on("click", function () {
    switchSection("contacts");
});

$(".skills-link").on("click", function () {
    switchSection("skills");
});

$(".projects-link").on("click", function () {
    switchSection("projects");
});

$(".toDo-link").on("click", function () {
    switchSection("toDo");
});
$(".schedule-link").on("click", function () {
    switchSection("schedule");
});
$(".myCity-link").on("click", function () {
    switchSection("myCity");
});