$('.add-to-cart').on('click', function() {
    var product = $(this).attr('data-product-id');
    $.ajax({
        url: "/add_to_cart/" + product,
        success: function(res) {
            $('#cartModal').removeClass('fade');
            $('#cartModal').addClass('show');
        }
    });
});

$('.close-modal').on('click', function() {
    $('#cartModal').removeClass('show');
    $('#cartModal').addClass('fade');
});

$('.cart_quantity_delete').on('click', function() {
    var product = $(this).attr('data-product-id');
    $.ajax({
        url: "/delete_cart/" + product,
        success: function(res) {
            var id = 'product-' + product;
            document.getElementById(id).remove();
            if ($('.cart_quantity_delete').length == 0) {
                document.getElementById("do_action").setAttribute('style', 'display: none;');
                document.getElementById("cart_info").setAttribute('style', 'display: block;');
                document.getElementById("cart_info_table").setAttribute('style', 'display: none;');
                document.getElementById("empty_cart").setAttribute('style', 'display: block;');
            }
        }
    });
});

$('.cart').on('click', function() {
    var product = document.getElementById("product_id").value;
    var quantity = document.getElementById("quantity").value;
    $.ajax({
        url: "/add_to_cart/" + product,
        data: {'quantity': quantity},
        success: function(res) {
            $('#cartModal').removeClass('fade');
            $('#cartModal').addClass('show');
        }
    });
});