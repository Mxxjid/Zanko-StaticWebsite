// src/store/gallerySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGalleryImages } from "./gallery"; // ایمپورت مستقیم

export const fetchGalleryData = createAsyncThunk(
  "gallery/fetchAll",
  async () => {
    return await fetchGalleryImages(); // مستقیم فراخوانی
  }
);

const initialState = {
  images: [],
  backgroundImage: "/img/anti/پرده-بیمارستانی-1.jpg",
  loading: false,
  error: null,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGalleryData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGalleryData.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload.images;
        state.backgroundImage = action.payload.backgroundImage;
      })
      .addCase(fetchGalleryData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default gallerySlice.reducer;