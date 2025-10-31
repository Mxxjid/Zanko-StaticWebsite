import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// fetch از API Route سرور
export const fetchGallery = createAsyncThunk(
  "gallery/fetchGallery",
  async () => {
    const res = await fetch("/api/gallery");
    if (!res.ok) throw new Error("Failed to fetch gallery");
    const data = await res.json();
    return data;
  }
);

const initialState = {
  images: [],
  backgroundImage: "/img/anti/پرده-بیمارستانی-1.jpg", // fallback
  loading: false,
  error: null,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGallery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGallery.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload.images;
        state.backgroundImage = action.payload.backgroundImage;
      })
      .addCase(fetchGallery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default gallerySlice.reducer;
