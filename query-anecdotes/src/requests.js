import axios from "axios"

const url = "http://localhost:3001/anecdotes"

export const getAnecdotes = () => {
    return axios.get(url).then(res => res.data)
}

export const createAnecdote = (anecdote) => {
    return axios.post(url, anecdote).then(res => res.data)
}

export const updateAnecdote = (anecdote) => {
    return axios.put(`${url}/${anecdote.id}`, anecdote).then(res => res.data)
}
