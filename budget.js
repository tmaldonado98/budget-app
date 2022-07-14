$(document).ready(()=> {
    $('input').val('');
});

    //to add a , to large numbers
// $('.income-amt').on('input', function() {
//     let amt = $('.income-amt').val();
//     return $('.income-amt').val(Number(amt).toLocaleString('en-US'));

// });

    
    


let cloneCount = 2;
/*$('#add-source-inc').click(()=> {
        if ($('.income-amt').last().val() ){
    //$('.input-grid-income').first().clone(true, true).insertAfter($('.input-grid-income').last()).find('input').val('');
    $('.input-grid-income').first().clone(true, true).attr('id', 'inc'+ cloneCount++).insertAfter($('[class^=input-grid-income]:last')).find('input').val('');
    $('.input-grid-income').slice(1).last().append('<button class="remove-row">X</button>');
    

    } else if ($('.income-amt').val() == undefined || null ) {
        return false
    }
});*/
/*8
$('#add-source-exp').click(()=> {
    $('.input-grid-expenses').first().clone(true).insertAfter($('.input-grid-expenses').last()).find('input').val('');
});*/


//Invalidates letter characters for gross income field
$('.income-amt').keypress((key)=>{
    if(key.charCode < 48 || key.charCode > 57){
        return false;
    } 
});



let total = [];
let arrayX = [];

function confirm(){
    $('#row').clone(true, true).attr('id', 'row'+ cloneCount++).attr('hidden', false).insertAfter($('[id^=row]:last')).val('');
    //$('#x').attr('id', 'x'+ cloneCount++);
    
    $('[id^=name]:last').append($('.income-name').last().val());    
    let appendAmt = $('.income-amt').last().val()
    $('[id^=amt]:last').append(Number(appendAmt).toLocaleString('en'));

    total.push(Number($('.income-amt').val()));
    console.log(total);

    let sum = 0;
    for (let i = 0; i < total.length; i++) {
        sum += total[i];
         console.log(sum);
        $('#display-gross').html('$' + sum.toLocaleString('en'));
        
    }
   
    $('#x').on('click', function(){
        console.log(sum);

        //sum = sum - Number($(this).closest($('#amt')).val());
        $(this).closest('tr').remove();
        $('#display-gross').html('$' + sum.toLocaleString('en'));
    });

    $('.income-name').val('');
    $('.income-amt').val('');
}

$('#confirm').click(()=> {
    
    if ($('.income-amt').val() == 0 || undefined) {
        return false
    } else {
        confirm();
    }
});

$('.income-amt').keypress ((key)=> {
    if (key.keyCode == 13) {
        confirm();
}
});





/*
$('[id^=inc]').last().on("keydown", (()=> {
    $('#display-gross').html('');

}));

($('[id^=inc]')).on("keyup", (()=> {
    $('#display-gross').val($('#display-gross').val() + Number($('[id^=inc]').last().val()));
    $('#display-gross').html('$'+ $('#display-gross').val());
}));

    /////////
    arrayInc.push($('input[name=gross-income]').last().val());
    console.log(arrayInc);

       
    //totalValInc += jQuery.globalEval($(arrayInc).val());  

   // nextVal = arrayInc[($.inArray(arrayInc.indexOf(0)) + 1)]

   /* for (let i = 0; i < arrayInc.length; i++) {
        
        //totalValInc = Number(arrayInc);
        totalValInc += $(arrayInc[i]);
       // totalValInc += $('input[name=gross-income]').last().val() + Number($(nextVal));
    }*/   
    
    /*let totalValInc = $('#display-gross').val(Number($('#display-gross').val()) + Number($('.income-amt').last().val()));
    if (Number($('.income-amt').last().val()) === undefined || '' || 0) {
        $('#display-gross').val().replaceWith(Number($('#display-gross').val()) - Number($('.income-amt').last().val()));
        
    }*/
 /*   $('#display-gross').val(Number($('#display-gross').val()) + Number($('.income-amt').last().val()));
    $('#display-gross').html('$'+ $('#display-gross').val());
    console.log($('#display-gross').val());
*/
   // if ($('.income-amt').on("input propertychange")) {
  //      $('#display-gross').val() - $(this).val();
  //  }    

//});*/
/*$('.income-amt').on("input propertychange", function() {
        console.log($(this).val());
        //$('#display-gross').val(Number($('#display-gross').val()) + Number($('.income-amt').last().val()));
        $('#display-gross').html('$'+ $('#display-gross').val() - $(this).val());
        //#display-gross
     });
*/ 

$('#clear-inc').click(()=> {
    // $('.income-amt').val(undefined);
    // $('.income-name').val(undefined);
    $('#display-gross').val(undefined);
    $('[id^=name]').val(undefined);
    $('[id^=amt]').val(undefined);
//    $('.input-grid-income').slice(1).remove();
//   $('.input-grid-income').add().insertAfter($('#gross-inc-h'));
//    $('.input-grid-income').first().clone(true).insertAfter($('.input-grid-income').last()).find('input').val('');
//    $('.input-grid-income').add().insertAfter($('.h'));

    $('#display-gross').html($('#display-gross').val());
    $('[id^=amt]').html($('[id^=amt]').val());
    $('[id^=name]').html($('[id^=name]').val());
    $('[id^=row]').slice(1).remove();
    total = [];

})
