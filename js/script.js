$(document).ready(() => {

    $("body").css({
        opacity: "0"
    }).animate({
        opacity: "1"
    }, 2000)

    $("button").on("mouseenter", (event) => {
        $(event.currentTarget).animate({
            width: "220px",
            height: "55px"
        }, 20)
    }).on("mouseleave", (event) => {
        $(event.currentTarget).animate({
            width: "200px",
            height: "50px"
        }, 20)
    })

    $("#discord-tag").on("click", (event) => {
        $(event.currentTarget).css({
            color: "#0000EE"
        })
    })
});