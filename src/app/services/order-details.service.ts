import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

    foodDetails=[
      {
        id:1,
        foodName:"Veg Chessy Grilled Sandwich ",
        foodDetails:"Beetroot, potato, sandwich masala, cucumber, bell pepper",
        foodPrice:200,
        foodImg:"https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1254&q=80"
      },

      {
        id:2,
        foodName:"Biryani",
        foodDetails:"Coconut milk, fried onions, basmati rice, biryani masala, star anise",
        foodPrice:200,
        foodImg:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80"
      },

      {
        id:3,
        foodName:"Freanch Fries",
        foodDetails:"Russet potatoes, white sugar, vegetable oil",
        foodPrice:60,
        foodImg:"https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },

      {
        id:4,
        foodName:"Cold Coffee",
        foodDetails:"Vanilla ice cream, cold brew, chocolate syrup, powdered,orio biscuit,chocolates",
        foodPrice:80,
        foodImg:"https://images.unsplash.com/photo-1625242662167-9ba73d268139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },

      {
        id:5,
        foodName:"Burger",
        foodDetails:"Bread crumbs, iceberg lettuce, red onion, egg, garlic",
        foodPrice:150,
        foodImg:"https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
      },

      {
        id:6,
        foodName:"Pizza",
        foodDetails:"Italian sausage, pizza dough, pesto, feta cheese, bell peppers",
        foodPrice:120,
        foodImg:"https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      }
    ]

}
