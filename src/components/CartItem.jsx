const CartItem = ({ item }) => {

    

    return (
        <div className="cart-item flex items-center gap-4">
            <img 
                src={item.image} 
                alt={item.description}
                className="w-16 h-16 object-cover rounded"
            />
            <div className="cart-item-details flex-1">
                <h3  className="font-semibold">{item.name}</h3>
                <p className="text-sm">Price: ${item.price.toFixed(2)}</p>
                <p className="text-sm">Quantity: {item.quantity}</p>
            </div>
        </div>
    );
};

export default CartItem;

