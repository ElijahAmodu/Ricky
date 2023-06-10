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

export const fetchEpisodes = createAsyncThunk('data/fetchCharacters', async (page: number) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/episode/${page}`);
    const characters = response.data.results;
    return {characters};
  } catch (error) {
    throw new Error('Failed to fetch characters');
  }
});

const EpisodeSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.characters = action.payload.characters;
      })
      .addCase(fetchEpisodes.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to fetch characters';
      });
  },
});

export const data =  EpisodeSlice.reducer;
export default EpisodeSlice;
