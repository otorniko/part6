import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
// 6.3-6.7  done
const App = () => {
    return (
        <div>
            <h2>Anecdotes</h2>
            <AnecdoteList />
            <AnecdoteForm />
        </div>
    )
}

export default App
