$(document).ready(()=> {
    $('input').val('');
});
 
$('.income-name').css('text-transform', 'capitalize');
$('.exp-name').css('text-transform', 'capitalize');

//Invalidates letter characters for gross income field
$('.income-amt').keypress((key)=>{
    if(key.charCode < 48 || key.charCode > 57){
        return false;
    }    
});

function addRowInc() {
   if ($('[class^=income-amt]:last').val() == 0) {
        return false;
   } else {
    $('.input-grid-income').last().clone(true, true).insertAfter($('[class^=input-grid-income]:last')).find('input').val('');   
    }
};

$('#add-source-inc').click(()=> {
   addRowInc();
})

$('.income-amt').keypress ((key)=> {
        if (key.keyCode == 13 && $('.income-amt').val() == 0) {
           return false; 
    } else if (key.keyCode == 13) {
            addRowInc();
    }
});

let totalAmountInc = function(){
        let sum = 0

        $('.income-amt').each(function(){
            let amtVal = $(this).val().replace(',' , '');
            
            if (amtVal != 0) {
                sum += parseFloat(amtVal);
            }
        })
        incTotal = sum;
        console.log(incTotal);
        $('#display-gross').val(sum.toLocaleString('en-US'));
    };

$('.income-amt').keyup(()=> {
    totalAmountInc();        
});

//To remove rows
$('#remove-row-inc').click(()=>{
    if ($('.input-grid-income').length == 1) {
        return false;
    } else {
    $('.input-grid-income').last().remove();
    }
});

$('#clear-inc').click(()=> {
    $('.income-name').val(undefined);
    $('.income-amt').val(undefined);
    $('.input-grid-income').slice(1).remove();
    $('#display-gross').val(undefined);
});


//////////////

//Invalidates letter characters for gross income field
$('.exp-amt').keypress((key)=>{
    if(key.charCode < 48 || key.charCode > 57){
        return false;
    }    
});

function addRowExp() {
   if ($('[class^=exp-amt]:last').val() == 0) {
        return false;
   } else {
    $('.input-grid-expenses').last().clone(true, true).insertAfter($('[class^=input-grid-expenses]:last')).find('input').val('');   
    }
};

$('#add-source-exp').click(()=> {
   addRowExp();
})

$('.exp-amt').keypress ((key)=> {
        if (key.keyCode == 13 && $('.exp-amt').val() == 0) {
           return false; 
    } else if (key.keyCode == 13) {
            addRowExp();
    }
});


let expTotal = 0;
let totalAmountExp = function(){
        let sum = 0

        $('.exp-amt').each(function(){
            let amtVal = $(this).val().replace(',' , '');
            
            if (amtVal != 0) {
                sum += parseFloat(amtVal);
                
            }
        })
        expTotal = sum;
        console.log(expTotal);
        $('#display-exp').val(sum.toLocaleString('en-US'));
    };

$('.exp-amt').keyup(()=> {
    totalAmountExp();        
});

//To remove rows
$('#remove-row-exp').click(()=>{
    if ($('.input-grid-expenses').length == 1) {
        return false;
    } else {
    $('.input-grid-expenses:last').remove();
    }
});

$('#clear-exp').click(()=> {
    $('.exp-name').val(undefined);
    $('.exp-amt').val(undefined);
    $('.input-grid-expenses').slice(1).remove();
    $('#display-exp').val(undefined);
});


///////////////

let totalAmountNet = function(){
    let op = 0;

        let amtVal = incTotal - expTotal;
        //(Number($('#display-gross').val().toLocaleString('en-US', {useGrouping: false})) - Number($('#display-exp').val().toLocaleString('en-US', {useGrouping: false})));
        

        if (amtVal != undefined || 0) {
            op += parseFloat(amtVal);
        }
    $('#display-net').val('$' + op.toLocaleString('en-US'));
};

$('.exp-amt').keyup(()=> {
totalAmountNet();        
console.log($('#display-gross').val(), $('#display-exp').val())
});

$('.income-amt').keyup(()=> {
totalAmountNet();        
console.log($('#display-gross').val(), $('#display-exp').val())
});

$('#remove-row-exp, #remove-row-inc, #add-source-exp, #add-source-inc, #clear-inc, #clear-exp').click(()=> {
    totalAmountInc();
    totalAmountExp();
    totalAmountNet();        
    console.log($('#display-gross').val(), $('#display-exp').val())
    });