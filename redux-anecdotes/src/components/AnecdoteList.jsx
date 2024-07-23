import { useSelector, useDispatch } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, resetNotification } from "../reducers/notificationReducer"
import Filter from "./Filter"

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        return state.filter === ""
            ? state.anecdotes
            : state.anecdotes.filter(anecdote =>
                  anecdote.content.toLowerCase().match(new RegExp(state.filter.toLowerCase()))
              )
    })

    const dispatch = useDispatch()

    const vote = anecdote => {
        const id = anecdote.id
        dispatch(voteAnecdote(id))
        const notification = `You voted "${anecdote.content}"`
        dispatch(setNotification(notification))
        setTimeout(() => {
            dispatch(resetNotification())
        }, 5000);
    }

    return (
        <div>
            <Filter />
            {[...anecdotes]
                .sort((a, b) => b.votes - a.votes)
                .map(anecdote => (
                    <div key={anecdote.id}>
                        <div>{anecdote.content}</div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote)}>vote</button>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default AnecdoteList
