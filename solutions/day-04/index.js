const rootElement = document.querySelector('#root')

console.log("wii")

const App = () => {
    return (
        <div className="app">
            <h1>Test</h1>
        </div>
    )
};

ReactDOM.render(<App />, rootElement)

