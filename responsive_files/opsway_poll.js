//<![CDATA[
jQuery(document).ready(function(){ 

    //нет опроса - загружаем баннер
    if(!jQuery('#thankyou').length) {
        jQuery('#showAfterPoll').css({'display': 'block'});
    }

    jQuery('#start-poll').live('click', function() {
        jQuery(this).hide();
        jQuery('.poll-content').show();
    });

    var currentPoll = '';
    jQuery('#poll-form .block-content button').live('click', function() {
        var activePoll = jQuery('#poll-form .active-poll'),
            pollId     = jQuery(this).attr('data-poll'),
            isLastPoll = jQuery(this).attr('data-last');

        if(validatePollAnswerIsSelected(pollId)) {
            var type = jQuery(this).attr('type'),
                next = activePoll.next().attr('id');
            currentPoll = activePoll;
            currentPoll.removeClass('active-poll');
            currentPoll.css({'display': 'none'});
            jQuery.ajax({
                type: "POST",
                url: jQuery('#poll-form').attr('action'),
                data: { poll_id: pollId, vote_id: currentPoll.find('.poll_vote:checked').val()},
                dataType: "json",
                cache: false,
                success: function (res){
                    if(res) {
                        if(isLastPoll != 1) {
                            activePoll = jQuery('#' + next);
                            activePoll.addClass('active-poll');
                            activePoll.css({'display': 'block'});
                        } else {
                            jQuery('#thankyou').css({'display': 'block'});
                            var showAfterPoll = jQuery('#showAfterPoll'),
                                currentLiElem = jQuery('#thankyou').parents('.jcarousel-item');
                            currentLiElem.delay(2000).animate({
                                opacity: 0,
                            }, 500, function() {
                                currentLiElem.css({'display': 'none'});
                                showAfterPoll.css({'display': 'block'});
                            });
                        }
                    } else {
                        activePoll = jQuery('#' + next);
                        activePoll.addClass('active-poll');
                        activePoll.css({'display': 'block'});
                    }
                }
            });
        } else {
            alert('Вы должны выбрать вариант ответа, чтобы проголосовать!');
        }
    });
});

function validatePollAnswerIsSelected(id)
{
    var options = $$('#poll_' + id + ' input.poll_vote');
    for( i in options ) {
        if( options[i].checked == true ) {
            return true;
        }
    }
    return false;
}
//]]>