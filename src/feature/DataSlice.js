import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initiaImages = [
  {
    id: uuidv4(),
    url: 'https://images.unsplash.com/photo-1662103185268-465a66a86aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: uuidv4(),
    url: 'https://images.unsplash.com/photo-1662068612273-cefedc1d48f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: uuidv4(),
    url: 'https://images.unsplash.com/photo-1662091383949-639fe718d586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: uuidv4(),
    url: 'https://images.unsplash.com/photo-1662358279914-9e9e4efb364f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60',
  },
  {
    id: uuidv4(),
    url: 'https://images.unsplash.com/photo-1662104320233-ab2f03686036?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: uuidv4(),
    url: 'https://images.unsplash.com/photo-1662067379109-d0f0ac679c58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60',
  }
]

export const fetchImages = createAsyncThunk('GET_IMAGES', async () => {
  let headersList = {
   "Content-Type": "application/json"
  }
   
  let response = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}`, { 
    method: "GET",
    headers: headersList
  });
  
  let data = await response.json();
  const newData = {};
  newData.id = data.id;
  newData.url = data.urls.thumb;
  return newData;
})

export const dataSlice = createSlice({
  name: 'images',
  initialState: {
    displayImages: initiaImages,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      return { ...state, displayImages: [...state.displayImages, action.payload] }
    });
  },
});

export default dataSlice.reducer;
