import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { createECDH } from 'crypto';

const now = moment();
console.log(now.format('Do MMMM, YYYY '));

export default class UpsertExpense extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            calenderFocused : false,
            errorMsg:''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
        this.setState(() => ({ amount }));
    }

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }));
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused : focused }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            this.setState(() => ({errorMsg : 'Please Provide Description and amount'}))
        }else{
            this.setState(() => ({errorMsg : undefined}))
            this.props.onSubmit({
                description : this.state.description,
                note : this.state.note,
                amount : parseFloat(this.state.amount,10) * 100,
                createdAt : this.state.createdAt.valueOf()
            });
        }
    }

    render(){
        return (
            <div>
                <h3>EXPENSE FORM</h3>
                {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type='text'
                            placeholder='Description' 
                            value = {this.state.description}
                            onChange = {this.onDescriptionChange}
                            autoFocus />

                    <input type='number'
                            placeholder='Amount'
                            value = {this.state.amount}
                            onChange = {this.onAmountChange}/>

                    <SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calenderFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange ={() => false}
                        />

                    <textarea placeholder = 'Details about Expense' 
                                value = {this.state.note}
                                onChange = {this.onNoteChange} />

                    <button>Add Expense</button>
                </form>

            </div>
        )
    }
}