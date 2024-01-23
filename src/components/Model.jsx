import React, { useState, useEffect, useCallback } from 'react'
import { useForm } from "react-hook-form";

const Model = ({ title, modal, setmodal, settodolist, todolist, mode, modaltask }) => {
    const [titlecount, settitlecount] = useState(0);
    const [desccount, setdescount] = useState(0);
    const { register, reset, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            complete: mode == 2 || mode == 3 ? modaltask.complete : false
        }
    });
    const titclechange = useCallback((e) => {
        const inputValue = e.target.value;
        settitlecount(inputValue.length);
    }, []);
    const descchange = useCallback((e) => {
        const inputValue = e.target.value;
        setdescount(inputValue.length);
    }, []);
    const onSubmit = (data) => {
        const templist = [...todolist];
        if (mode == 1) {
            templist.push(data);
        } else {
            templist[modaltask] = data;
        }
        localStorage.setItem("todolist", JSON.stringify(templist))
        setmodal(false);
        settodolist(templist);
        settitlecount(0);
        setdescount(0);
    };
    useEffect(() => {
        if (mode == 2 || mode == 3) {
            settitlecount(todolist[modaltask].title.length);
            setdescount(todolist[modaltask].desc.length);
        } else {
            settitlecount(0);
            setdescount(0);
        }
        reset({
            title: mode == 2 || mode == 3 ? todolist[modaltask].title : '',
            desc: mode == 2 || mode == 3 ? todolist[modaltask].desc : '',
            complete: mode == 2 || mode == 3 ? todolist[modaltask].complete : false
        });
    }, [mode, modal])
    return (
        <div className={`modal ${modal ? 'show' : ''} fade`} tabIndex="-1" style={{ display: modal ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" onClick={() => setmodal(false)} aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" readOnly={mode == 3} {...register("title", { onChange: titclechange, maxLength: 35, required: "Title is required" })} className={`form-control ${errors.title ? 'is-invalid' : ''}`} id="title" placeholder="Enter Title" maxLength={35} />
                                <div className='helper-text float-end'>{titlecount}/35</div>
                                <div className='invalid-feedback'>{errors.title ? errors.title.message : ''}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea type="text" readOnly={mode == 3} {...register("desc", { onChange: descchange, maxLength: 250, required: "Description is required" })} className={`form-control ${errors.desc ? 'is-invalid' : ''}`} id="description" maxLength={250} rows={3} placeholder="Enter Description" />
                                <div className='helper-text float-end'>{desccount}/250</div>
                                <div className='invalid-feedback'>{errors.desc ? errors.desc.message : ''}</div>
                            </div>
                            <input type='hidden' {...register("complete")} />
                        </div>
                        {mode != 3 && <div className="modal-footer">
                            <button type="submit" className="btn btn-primary"><i className="fa-solid fa-floppy-disk"></i> SAVE</button>
                        </div>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Model
