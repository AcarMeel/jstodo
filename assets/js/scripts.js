// check or uncheck todos

$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
});

// remove todo

$('ul').on('click', 'span', function() {
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
});

// insert new todo 
$('input[type="text"]').keypress(function(e) {
    if (event.which === 13) {
        //grabbing value from input
        var todoText = $(this).val();
        // clearing the input 
        $(this).val("");
        // create a new li with that value 
        $("ul").append('<li><span><i class="icon icon-trash"></i></span> ' + todoText + ' </li>');
    }
});

// icon 
$('.icon-menu').on('click', function() {
    $('input[type="text"]').fadeToggle();
    $(this).toggleClass('icon-heart');
});
