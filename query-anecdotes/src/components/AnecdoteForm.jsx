import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createAnecdote } from "../requests"
import { dispatchNotification } from "../NotificationContext"

const AnecdoteForm = () => {
    const queryClient = useQueryClient()
    const dispatch = dispatchNotification()

    const timedDispatch = notification => {
        dispatch({ type: "SET", payload: notification })
        setTimeout(() => {
            dispatch({ type: "SET", payload: "" })
        }, 5000)
    }

    const newAnecdoteMutation = useMutation({ mutationFn: createAnecdote })

    const onCreate = event => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ""
        newAnecdoteMutation.mutate(
            { content, votes: 0 },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ["anecdotes"] })
                    timedDispatch(`Added: "${content}"`)
                },
                onError: error => {
                    timedDispatch("Error anecdote too short, must be longer than 5 characters")
                    newAnecdoteMutation.reset()
                },
            }
        )
    }

    return (
        <div>
            <h3>create new</h3>
            <form onSubmit={onCreate}>
                <input name="anecdote" />
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm
