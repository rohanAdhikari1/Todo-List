import React from 'react'

const TodoItems = (props) => {
    const colors = [
        {
            primaryColor: "#5D93E1",
            secoundaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secoundaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secoundaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secoundaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secoundaryColor: "#F3F0FD"
        }
    ];
    return (
        <div className='card-wrapper mt-3'>
            <div className='card-top' style={{ backgroundColor: colors[props.position % 5].primaryColor }}></div>
            <div className='task-holder'>
                <div onClick={() => props.handledetail(props.position, 3)} style={{ width: "100%", height: "85%" }}>
                    <span className="card-head ms-1" style={{ backgroundColor: colors[props.position % 5].secoundaryColor }}>{props.item.title}</span>
                    <p className="ms-2" style={{ textDecoration: props.item.complete ? "line-through" : "auto" }}>{props.item.desc}</p>
                </div>
                <div className='task-actions'>
                    <span onClick={() => props.handlestatus(props.position, !props.item.complete)}>
                        <i className={`fa-solid me-3 ${props.item.complete ? 'fa-xmark cross' : 'fa-check check'}`}></i>
                    </span>
                    <span onClick={() => props.handledetail(props.position, 2)}><i className="fa-regular fa-pen-to-square me-3" style={{ color: "#5DC250" }}></i></span>
                    <span onClick={() => props.deleteTask(props.position)}><i className="fa-solid fa-trash me-2" style={{ color: "#bb2124" }}></i></span>
                </div>
            </div>
        </div >
    )
}

export default TodoItems
