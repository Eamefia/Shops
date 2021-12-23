export const initialState = {
    basket: [
        {
            id: "1227647655",
            title: "New iphone 11 pro",
            price: "588.94",
            rating: 4,
            image: "https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1.jpg"
        },
        {
            id: "12267655",
            title: "New iphone 11 pro",
            price: "588.94",
            rating: 4,
            image: "https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1.jpg"
        }
    ],
    user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer =(state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return { ...state,
                     basket: [...state.basket, action.item] };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            console.log(index);
            
             if (index >= 0) {
                 newBasket.splice(index, 1);
             }else{
                 console.warn(`can't remove product (id: ${action.id}) as its not in basket`);
                 
             }
            return { ...state, basket: newBasket };
        default:
            return state;
    }
}

export default reducer