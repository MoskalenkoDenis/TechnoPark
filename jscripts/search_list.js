/*click on the drop-down list*/

$(document).on('click', '.list a', function(event) {
    event.preventDefault();
    var parent_div = $(this).closest('div');
    var name_list = parent_div.attr('class').replace('list',' ').replace(/\s+/g,'');
    if( $('.' + name_list).find('ul').css('display')=='block'){
        return;
    }
    var time = setTimeout(function () {
        $('.' + name_list).find('ul').css('display', 'block');
    },100);
});

/*click on the item in the list*/
$(document).on('click', 'ul li span', function() {
    var parent_div = $(this).closest('div');
    var name_list = parent_div.attr('class').replace('list',' ').replace(/\s+/g,'');
    var item_value = $(this).text();
    $('.'+name_list).find('a').text(item_value);
    $('.'+name_list).find('ul').css('display','none');
});

$(document).on('click', 'body', function () {

    for(var a in $('.list ul')) {
        if( $(a).css('display')=='block'){
            $('.list ul').css('display','none');
        }
    }
});
