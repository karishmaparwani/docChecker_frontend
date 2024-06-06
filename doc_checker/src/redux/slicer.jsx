import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk("fetchData", async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    return data.json()
})

const slice = createSlice({
    name: '',
    initialState: {
        isLoading: false,
        data: null,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.error = true
        })
    }
})

export default slice.reducer