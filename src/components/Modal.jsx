import React from "react";
import { Button, Modal, TextInput } from "flowbite-react";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Component() {
    const contextObj = useContext(AppContext)
    const { editString, setEditString, openModal, setOpenModal, editIndex, setEditIndex ,setTasks} = contextObj


    function EditTask() {
        if(editString!==""){
            setTasks(prev =>
                prev.map((task, i) =>
                    i=== editIndex ? { taskString:editString, checked: true } : task
                ),
                setEditIndex(null),
                setEditString("")
            )
        }
    }

    return (
        <>

            <Modal show={openModal} onClose={() => { setOpenModal(false), setEditString("") }}>
                <Modal.Header>Edit Your Task</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <TextInput value={editString} onChange={(e) => setEditString(e.target.value)} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => { setOpenModal(false), EditTask() }}>Submit</Button>
                    <Button color="gray" onClick={() => { setOpenModal(false), setEditString("") }}>
                        close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
