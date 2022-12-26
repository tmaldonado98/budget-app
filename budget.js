$(document).ready(()=> {
    $('input').val('');

 
$('.income-name').css('text-transform', 'capitalize');
$('.exp-name').css('text-transform', 'capitalize');

$('.print').click(()=>{
    print();    
});

$('#show-curr').click(()=>{
    // $('#container-curr').css('visibility', 'visible');
    // $('#container-curr').css('opacity', '1');
    // $('#container-curr').css('height', 'auto')
    $('#container-curr').addClass('show-container-curr');
    $('#hide').css('opacity', '1');
});

$('#hide').click(()=>{
    // $('#container-curr').css('visibility', 'hidden');
    // $('#container-curr').css('opacity', '0');
    // $('#container-curr').css('height', '0')
    $('#container-curr').removeClass('show-container-curr');
    $('#hide').css('opacity', '0');
});

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
        $('#display-gross').html((sum.toLocaleString('en-US')));
            
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
        $('#display-exp').html(sum.toLocaleString('en-US'));
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
    $('#display-net').html(op.toLocaleString('en-US'));
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

});

/////// CURRENCY SELECTION AND REPLACEMENT

$('.curr').on('click', function(){
    $('#container-curr').removeClass('show-container-curr');
    $('#hide').css('opacity', '0');
    
});

    $('#usd').click(function(){
        let sym = $(this).text();
        $('.symbol').html(sym);
    });    

    $('#cnr').click(function(){
        let sym = $(this).text();
        // CN&#165;
        $('.symbol').html(sym);
    });    

    $('#brp').click(function(){
        let sym = $(this).text();
        $('.symbol').html(sym);
    });    

    $('#ir').click(function(){
        let sym = $(this).text();
        $('.symbol').html(sym);
    });    

    $('#thb').click(function(){
        let sym = $(this).text();
        $('.symbol').html(sym);
    });    

    $('#rr').click(function(){
        let sym = $(this).text();
        $('.symbol').html(sym);
    }); 

    $('#jpy').click(function(){
        let sym = $(this).text();
        $('.symbol').html(sym);
    }); 

    $('#vd').click(function(){
        let sym = $(this).text();
        $('.symbol').html(sym);
    }); 

    $('#tl').click(function(){
        let sym = $(this).text();
        $('.symbol').html(sym);
    }); 

    $('#cbr').click(function(){
        let sym = $(this).text();
        $('.symbol').html(sym);
    }); 

    $('#eu').click(function(){
        let sym = $(this).text();
        $('.symbol').html(sym);
    }); 

    $('#bcoin').click(function(){
        let sym = $(this).text();
        $('.symbol').html(sym);
    }); 

    $('#pakr').click(function(){
        let sym = $(this).text();
        $('.symbol').html(sym);
    }); 


    
    $('.share').click(()=>{
        if (navigator.share) {
            navigator.share({
                title: 'My Budget',
                url: 'https://tmaldonado98.github.io/budget-app/'
            })
        }
    });
    
    

