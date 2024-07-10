/// <reference types="../@types/jquery"/>

$(`span.fa-bars`).on(`click` ,_ => {
    
    // if($(`aside`).width()) {
    //     $(`section#home`).animate({'margin-left' : '0px'}, 100);
    //     $(`aside`).animate({'width' : `0px`}, 100);
    //     return;
    // } 

    $(`span.fa-bars`).fadeOut(100, _ => $(`.fa-xmark`).fadeIn(100))
    $(`aside`).animate({'width' : `13%`}, 200);
    $(`section#home`).animate({'margin-left' : '13%'}, 200);
})

$(`.fa-xmark`).on(`click` ,_ => {

    $(`span.fa-bars`).fadeIn(100, _ => $(`.fa-xmark`).fadeOut(100));
    $(`section#home`).animate({'margin-left' : '0px'}, 200);
    $(`aside`).animate({'width' : `0px`}, 200);
})
$(`button.special-bg`).on(`click`, function (e) {
    $(`p.down`).slideUp(200);
    $(`p.down`).removeClass(`down`);
    $(e.target.nextElementSibling).slideToggle(200);
    $(e.target.nextElementSibling).addClass(`down`);
})

function eventDate (theDate) {
    let futurDate = new Date(theDate);
    let now = new Date();
    let dateDif = (futurDate.getTime()/1000) - (now.getTime()/1000);

    let days = dateDif / (24*60*60);
    let hours = (days * 24) % 60;
    let minutes = (hours * 60) % 60;
    let seconds = (minutes * 60) % 60;
    
    if (days < 0) {
        $(`.timeConainer .row `).addClass(`fs-1`)
        $(`.timeConainer .row `).addClass(`d-flex`)
        $(`.timeConainer .row `).addClass(`align-items-center`)
        $(`.timeConainer .row `).addClass(`justify-content-center`)
        $(`.timeConainer .row `).html (`the party is now`)
        return;
    }

    $(`span.days`).html(`${Math.floor(days)} days`);
    $(`span.hours`).html(`${Math.floor(hours)} hours`);
    $(`span.minutes`).html(`${Math.floor(minutes)} minutes`);
    $(`span.seconds`).html(`${Math.floor(seconds)} seconds`);

    setInterval(_ => eventDate(theDate), 1000)
}

eventDate(`27 july 2024 13:00:00`);

$(`textarea`).on(`input`, _ => {

    $(`textarea`).val().length > 100 ? $(`form p`).html(`<span class="text-red counter fs-4">your available character finished</span> delete ${-(100 - $(`textarea`).val().length)} to submit`) : $(`form p`).html(`<span class="text-red counter fs-4">${100 - $(`textarea`).val().length}</span> Character Reamining`);
})
$(`aside a`).on(`click`, e => {
    let sectionId = $(e.target).attr(`href`);
    console.log(sectionId);
    let sectionOff = $(sectionId).offset().top;
    $(`html`).animate({scrollTop : sectionOff}, 2000)
})