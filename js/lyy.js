$(document).ready(function(){$('.son_ul').hide();$('.select_box span').hover(function(){$(this).parent().find('ul.son_ul').slideDown();$(this).parent().find('li').hover(function(){$(this).addClass('hover')},function(){$(this).removeClass('hover')});$(this).parent().hover(function(){},function(){$(this).parent().find("ul.son_ul").slideUp();});},function(){});$('ul.son_ul li').click(function(){$(this).parents('li').find('span').html($(this).html());$(this).parents('li').find('ul').slideUp();});});