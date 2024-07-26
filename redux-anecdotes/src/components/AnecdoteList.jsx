import { useSelector, useDispatch } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
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
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotification(`You voted "${anecdote.content}"`, 5))
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
