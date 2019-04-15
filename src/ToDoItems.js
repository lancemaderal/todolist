import React, { Component } from "react";
import FlipMove from "react-flip-move";

class ToDoItems extends Component{
    
    constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this);
        this.done = this.done.bind(this);
    }

    createTasks(item) {
        var key=item.key;
        return <li>
            <div
                style={{ textDecoration: item.isCompleted ? "line-through" : "" }}
            >
                {item.text}
                {item.isCompleted}
            </div>

            <div className="modifier">
                <button
                    variant="outline-warning"
                    size="sm"
                    onClick={() => this.done(key)}
                    style={{ opacity: item.isCompleted ? 0.7 : 1 , Color: "C2C2C2"}}
                >
                    { item.isCompleted ? 'Undo' : 'Done' }
                </button>
                <button 
                    variant="outline-danger"
                    size="sm"
                    onClick={() => this.delete(key)}
                >
                    Delete
                </button>
            </div>
        </li>
    }
    
    delete(key) {
        this.props.delete(key);
    }

    done(key){
        this.props.done(key);
    }

    toEdit(key){
        this.props.toEdit(key);
    }

    
    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <div>
                <ul className="theList">
                    <FlipMove duration={400} easing="ease-out">
                        {listItems.map(item =><il>{item}</il>)}
                    </FlipMove>
                </ul>
            </div>
        );
    }
}

export default ToDoItems;
