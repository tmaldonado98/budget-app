$(document).ready(()=> {
    $('input').val('');
});

    //to add a , to large numbers
// $('.income-amt').on('input', function() {
//     let amt = $('.income-amt').val();
//     return $('.income-amt').val(Number(amt).toLocaleString('en-US'));

// });

    
    
$('.income-name').css('text-transform', 'capitalize');
$('.expense-name').css('text-transform', 'capitalize');


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
 /*if ($('.income-amt').val() >= 1) {
        $('#remove-row').show().slice(0);
        //removeAttr('hidden')
    }*/ 

function addRow() {
   if ($('[class^=income-amt]:last').val() == 0) {
        return false;
   } else {
    $('.input-grid-income').first().clone(true, true).insertAfter($('[class^=input-grid-income]:last')).find('input').val('');   
}
   //.attr('class', 'input-grid-income'+ cloneCount++)

};

$('#add-source-inc').click(()=> {
   addRow();
})

// $('.income-name').keypress(()=>{
// })

$('.income-amt').keypress ((key)=> {
        if (key.keyCode == 13 && $('.income-amt').val() == 0) {
           return false; 
    } else if (key.keyCode == 13) {
            addRow();
    }
});

let totalAmount = function(){
        let sum = 0

        $('.income-amt').each(function(){
            let amtVal = $(this).val().replace(',' , '');
            
            if (amtVal != 0) {
                sum += parseFloat(amtVal);
            }
        })
        $('#display-gross').val('$' + sum.toLocaleString('en-US'));
    };

$('.income-amt').keyup(()=> {
    totalAmount();        
});

//To remove rows
$('#remove-row').click(()=>{
    $('.input-grid-income:last').remove();
});

$('#clear-inc').click(()=> {
    // $('.income-amt').val(undefined);
    // $('.income-name').val(undefined);
    $('.income-name').val(undefined);
    $('.income-amt').val(undefined);
    $('.input-grid-income').slice(1).remove();
//   $('.input-grid-income').add().insertAfter($('#gross-inc-h'));
//    $('.input-grid-income').first().clone(true).insertAfter($('.input-grid-income').last()).find('input').val('');
//    $('.input-grid-income').add().insertAfter($('.h'));

    // $('#display-gross').html($('#display-gross').val());
    // $('[id^=amt]').html($('[id^=amt]').val());
    // $('[id^=name]').html($('[id^=name]').val());
    // $('[id^=row]').slice(1).remove();
    // total = [];

});

//let total = [];

/*
function confirm(){
    //$('#x').attr('id', 'x'+ cloneCount++);
    
    //stores value of inputs into value of td elements. Then it prints those td 
    //values onto the html
    $('[id^=name]:last').val($('.income-name').last().val());   
    $('[id^=name]:last').html($('[id^=name]:last').val());
    
    //Same thing as above ^^
    let lastAmt = Number($('.income-amt').last().val().toLocaleString('en'));
    $('[id^=amt]:last').val(lastAmt);
    $('[id^=amt]:last').html('$' + $('[id^=amt]:last').val())
    console.log($('[id^=amt]:last').val())

    //modifying array
    total.push(Number($('.income-amt').val()));
    console.log(total);

    //sum had to be declared within the function so that it could reset to 0
    //upon each confirm. This is so that the new total sum can be added starting
    //from 0, instead of adding the sum onto an already started operation.
    let sum = 0;
    for (let i = 0; i < total.length; i++) {
        sum += total[i];
         console.log(sum);
        $('#display-gross').val(sum.toLocaleString('en')); 
        $('#display-gross').html('$' + sum.toLocaleString('en'));
        
    }


    $('.income-name').val('');
    $('.income-amt').val('');
}*/

$('#amt').focusout(()=> {
    //let lastAmt = Number($('.income-amt').last().val().toLocaleString('en'));
   // $(this).replaceWith($(this).val())
    //(lastAmt);
   total.push(Number($('#amt').val()));
    console.log(total);
    
  //  total = [];
  //  console.log(total);
//   $(this).focusout(()=> {


// })
})



$('#x').on('click', function(){
    console.log($(this).closest($('#amt')).value);
    //sum = sum - Number($(this).closest($('#amt')).val());
    $(this).closest('tr').remove();
    let removedVal = $(this).closest('[id^=amt]').val();
    let recalculation = Number($('#display-gross').val()) - Number(removedVal);//Number($(this).closest($('#amt').val()));
    //$('#display-gross').html('$' + sum);
    $('#display-gross').html('$' + Number(recalculation).toLocaleString('en'));
    console.log(Number($('#display-gross').val()));
});


$('#confirm').click(()=> {
    
    if ($('.income-amt').val() == 0 || undefined) {
        return false
    } else {
        confirm();
    }
});




