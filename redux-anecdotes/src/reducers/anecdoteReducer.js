import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"

const anecdoteSlice = createSlice({
    name: "anecdotes",
    initialState: [],
    reducers: {
        vote(state, action) {
            const changedAnecdote = action.payload
            return state.map(anecdote =>
                anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote
            )
        },
        appendAnecdote(state, action) {
            state.push(action.payload)
        },
        setAnecdotes(state, action) {
            return action.payload
        },
    },
})

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch(setAnecdotes(anecdotes))
    }
}

export const createAnecdote = anecdote => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNew(anecdote)
        dispatch(appendAnecdote(newAnecdote))
    }
}

export const voteAnecdote = anecdote => {
    return async dispatch => {
        const updatedAnecdote = {
            ...anecdote,
            votes: anecdote.votes + 1,
        }
        await anecdoteService.updateAnecdote(anecdote.id, updatedAnecdote)
        dispatch(vote(updatedAnecdote))
    }
}

export default anecdoteSlice.reducer
export const { appendAnecdote, setAnecdotes, vote } = anecdoteSlice.actions
