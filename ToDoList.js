import React, { Component } from "react";
import ToDoItems from "./ToDoItems";
import "./ToDoList.css";

class ToDoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.itemDone = this.itemDone.bind(this);
    }

    addItem(e){
        if(this._inputElement.value !== "") {
            var newItem = {
                edit: false,
                text: this._inputElement.value,
                isCompleted: false,
                key: Date.now()
            };

            this.setState((prevState) => {
                return { 
                    items: prevState.items.concat(newItem) 
                };
            });
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
        this.setState({
            items: this.state.items.map(item => {
                if (item.key === key){
                    return {
                        ...item,
                        isCompleted: !item.isCompleted
                    };
                }
                else{
                    return item;
                }
            })
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
                            done={this.itemDone}
                            />
                
            </div>
        );
    }
}

export default ToDoList;