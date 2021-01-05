// prop count default = 0 

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.add = this.add.bind(this)
        this.take = this.take.bind(this)
        this.center = this.center.bind(this)
        this.state = { count: 0 }
    }

    componentDidMount() {
        console.log('getting data')
        const lsCount = parseInt(localStorage.getItem('count'))
        if (lsCount && !isNaN(lsCount)) {
            this.setState(() => ({ count: lsCount }))
        }

    }

    componentDidUpdate() {
        localStorage.setItem('count', this.state.count)
        console.log('Saving Data')
    }

    add() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    take() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    center() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.add}>+1</button>
                <button onClick={this.take}>-1</button>
                <button onClick={this.center}>Reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById("app"))

