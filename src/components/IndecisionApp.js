import React from 'react';
import AddOption from './AddOption';
import Options from './Options'
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    deleteOptions = () => { this.setState(() => ({ options: [] })) }
    clearSelectedOption = () => { this.setState({ selectedOption: undefined }); }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => ({ selectedOption: option }))
    }
    handleAddOption = (option) => {
        if (!option) { return 'Enter Valid Item to add Option' }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already Exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((el) => { return el !== option })
        }))
    }

    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            // do nothing
        }



    }

    componentDidUpdate = (prevState) => {
        if (prevState.options && prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('Saving Data')
        }
    }

    componentWillUnmount = () => {
        console.log('ComponentWillUnMount')
    }

    render = () => {
        const subtitle = 'Put your hands in the life of a computer'
        return (
            <div>
                <div className='container'>
                    <div>
                        <button
                            className="big-button"
                        >
                            Welcome to IndecisionApp
                        </button>
                    </div>

                    <div className="widget">
                        <Options
                            options={this.state.options}
                            deleteOptions={this.deleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>

                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    clearSelectedOption={this.clearSelectedOption} />
            </div>
        )
    }
}

export default IndecisionApp 