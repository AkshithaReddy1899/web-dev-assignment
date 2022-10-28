import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchImages = createAsyncThunk('GET_IMAGES', async () => {
  let response = await fetch("https://picsum.photos/v2/list?limit=100", { 
    method: "GET",
  });
  
  let data = await response.json();
  return data;
})

export const dataSlice = createSlice({
  name: 'images',
  initialState: {
		images: [],
    displayImages: [],
  },
  reducers: {
    addImages: (state, action) => {
      const cart = [];
      cart.push(action.payload)
      return { ...state, cart: [...state.cart, action.payload] }
    },
    /*
    productQuantity: (state, action) => {
      const index = state.products.findIndex((item) => item.id === action.payload.item.id)
      const updatedArray = update(state, {
        products: {
          [index]: {
            quantity: {$set: action.payload.value}
          }
        }
      })
      return updatedArray;
    },
    cartProductQuantity: (state, action) => {
      const index = state.products.findIndex((item) => item.id === action.payload.item.id)
      const updatedArray = update(state, {
        products: {
          [index]: {
            quantity: {$set: state.products[index].quantity + action.payload.num}
          }
        }
      })
      return updatedArray;
    }*/
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.images = action.payload;
    });
  },
});

export default dataSlice.reducer;
