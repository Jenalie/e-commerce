$(document).ready(function() {
    /*For navigation logic*/
    $(".navs").on('click', function(){
        $('.navs').removeClass('active');
        $(this).addClass('active');
    });


    var total = 0;
    $('td').each(function() {
        var price = $(this).attr('itemTotal');
        // console.log(price);
        if(price){
            total = total + parseFloat(price);
        }
    });
    
    $('#total').html(total);

    $('.product').on('click', function(e){
        e.preventDefault();
        let prodId    = $(this).closest('tr').attr('id');
        let itemPrice = $('#'+prodId +' td:eq(3)').attr('itemTotal');
        
        var currentTotal = parseFloat($('#total').html());
        var itemPriceParsed = parseFloat(itemPrice);
        var newTotal     = currentTotal.toFixed(2) - itemPriceParsed.toFixed(2);
        $('#total').html(newTotal);

        $('#'+prodId).remove();
        // console.log(newTotal);
    });
});