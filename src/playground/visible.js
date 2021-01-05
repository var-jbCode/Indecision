class Visible extends React.Component {
    constructor(props) {
        super(props)
        this.toggleVis = this.toggleVis.bind(this)
        this.state = { vis: false }
    }
    toggleVis() {
        this.setState((prevState) => {
            return {
                vis: !prevState.vis
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVis}>
                    {this.state.vis ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.vis && (
                    <div>
                        <p>Hey Here are some details now visible!!!</p>
                    </div>
                )}

            </div>);
    }
}



ReactDOM.render(<Visible />, document.getElementById("app"))

