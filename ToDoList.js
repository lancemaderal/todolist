import React, { Component } from "react";
import ToDoItems from "./ToDoItems";
import "./ToDoList.css";

class ToDoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: [
                {
                    text: "Go to UPD",
                    isCompleted: true
                }
            ]
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.itemDone = this.itemDone.bind(this);

    }

    addItem(e){
        if(this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                isCompleted: false,
                key: Date.now()
            };

            const newTodos = [...this.state.items, newItem];
            this.setState({items:newTodos});
        }

        this._inputElement.value = "";

        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
     
        this.setState({
            items: filteredItems
        });
    }

    itemDone(key){
        var newTodos = [...this.state.items];
        if(newTodos[key].isCompleted === false){
            newTodos[key].isCompleted = true;
        }
        else{
            newTodos[key].isCompleted = false;
        }
        this.setState({
            items: newTodos
        });
    }

    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input 
                            ref={(a) => this._inputElement = a} 
                            placeholder="enter task"
                        />
                        <button 
                            variant="online-success"
                            size="sm"
                            type="submit"
                        >
                        add
                        </button>
                    </form>
                </div>
                <ToDoItems entries={this.state.items}
                            delete={this.deleteItem}
                            done={this.itemDone}/>
            </div>
        );
    }
}

export default ToDoList;
