// store/gallerySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "@/lib/sanityClient";

// فچ تصاویر گالری
export const fetchGalleryImages = createAsyncThunk(
  "gallery/fetchImages",
  async () => {
    const query = `*[_type == "galleryImage"] {
      _id,
      alt,
      category,
      "src": image.asset->url
    }`;
    const images = await client.fetch(query);
    return images;
  }
);

// فچ تصویر پس‌زمینه
export const fetchBackgroundImage = createAsyncThunk(
  "gallery/fetchBackground",
  async () => {
    const query = `*[_type == "backgroundImage"][0] {
      "src": image.asset->url
    }`;
    const result = await client.fetch(query);
    return result?.src || "/img/anti/پرده-بیمارستانی-1.jpg"; // fallback
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
      // Gallery Images
      .addCase(fetchGalleryImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGalleryImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchGalleryImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Background Image
      .addCase(fetchBackgroundImage.fulfilled, (state, action) => {
        state.backgroundImage = action.payload;
      });
  },
});

export default gallerySlice.reducer;