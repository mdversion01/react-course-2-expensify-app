import React from 'react';
import { withRouter } from "react-router-dom";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

// const date = new Date();
const now = moment();
// console.log(now.format('MMM Do, YYYY'));

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
        this.baseState = this.state;
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onAddNote = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onCancel = (e) => {
        e.preventDefault();
        this.setState(this.baseState);
        this.props.history.push('/');
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            const error = 'Please provide a Description and an Amount.';
            this.setState(() => ({error}));
        } else {
            this.setState(() => ({ error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    };
    
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                    { this.state.error &&
                        <p className="form__error">{this.state.error}</p>
                    }
                    <input 
                        className="text-input"
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />  

                    <input 
                        className="text-input"
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />  

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths= {1}
                        isOutsideRange={() => false}
                    />

                    <textarea
                        className="textarea"
                        value={this.state.note}
                        onChange={this.onAddNote}
                        placeholder="Add a note for your expense (optional)"
                    >
                    </textarea>

                    <div className="form__buttons">
                        <button className="button button--space">
                            Add Expense
                        </button>

                        <button
                            className="button button--secondary"
                            onClick={this.onCancel}
                        >
                            Cancel
                        </button>
                    </div>
                    
                </form>
        )
    }
};

export default withRouter(ExpenseForm);
