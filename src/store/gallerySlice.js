import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 1. فچ تصاویر گالری
export const fetchGalleryImages = createAsyncThunk(
  "gallery/fetchGalleryImages",
  async () => {
    const res = await fetch("/api/gallery");
    if (!res.ok) throw new Error("Failed to fetch gallery");
    return res.json();
  }
);

// 2. فچ تصویر پس‌زمینه (جدا)
export const fetchBackgroundImage = createAsyncThunk(
  "gallery/fetchBackgroundImage",
  async () => {
    const res = await fetch("/api/gallery");
    if (!res.ok) throw new Error("Failed to fetch background");
    const data = await res.json();
    return data.backgroundImage;
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
      // برای گالری
      .addCase(fetchGalleryImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGalleryImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload.images || [];
        state.backgroundImage = action.payload.backgroundImage;
      })
      .addCase(fetchGalleryImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // برای پس‌زمینه
      .addCase(fetchBackgroundImage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBackgroundImage.fulfilled, (state, action) => {
        state.loading = false;
        state.backgroundImage = action.payload;
      })
      .addCase(fetchBackgroundImage.rejected, (state, action) => {
        state.loading = false;
        state.backgroundImage = initialState.backgroundImage;
      });
  },
});

export default gallerySlice.reducer;