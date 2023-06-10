import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Character {
  id: number;
  name: string;
  location: {
    name: string;
  };
  status: string;
  image: string;
}


interface DataState {
  isLoading: boolean;
  error: string | null;
  characters: Character[];
}


const initialState: DataState = {
  isLoading: false,
  error: null,
  characters: [],
};

export const fetchCharacters = createAsyncThunk('data/fetchCharacters', async (page: number) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const characters = response.data.results;
    return {characters};
  } catch (error) {
    throw new Error('Failed to fetch characters');
  }
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.characters = action.payload.characters;
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to fetch characters';
      });
  },
});

export const data =  dataSlice.reducer;
export default dataSlice;
