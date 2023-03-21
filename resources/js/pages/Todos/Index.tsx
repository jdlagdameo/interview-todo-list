import { useState } from 'react';
import { router } from '@inertiajs/react';
import { useSubmit } from '@/lib/forms';
import { FaPlusCircle, FaTrash } from "react-icons/fa";

import Layout from '@/layouts/Layout';
import { Todo } from '@/types';
import Modal from '@/components/common/Modal';
import TodoForm from '@/components/TodoForm';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

interface Props {
    todos: Todo[];
}

export default function TodosIndex({ todos }: Props) {

    const [modalOpen, setModalOpen] = useState(false);

    const deleteHandler = (id: number) => {
        let text = "Are you sure you want to delete this Todo item?";
        if (confirm(text) == true) {
            router.delete(`/todos/${id}`)
        } 
    };
    
    const onSubmitCheck = useSubmit({
        message: 'Todo tasks successfully updated.',
        onSuccess: () => {},
    });

    const checkHandler = (id:number, completed: boolean) => {
        router.put(
            `/todos/${id}`, 
            { completed }, 
            onSubmitCheck
        )
    }

    return (
        <Layout>
            <div className="container mt-12 mb-24">
                <div className="flex flex-col gap-12">
                    <Button
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                        className="mr-auto">
                        <FaPlusCircle /> Add ToDo
                    </Button>

                    {/* BRIEF: Your code here */}
                    {todos.map((todo) => {
                        return (
                            <Card key={todo.id}>

                                <input 
                                    type="checkbox" 
                                    checked={todo.completed}
                                    onChange={() => checkHandler(todo.id, todo.completed)} 
                                /> 
                                
                                {" "}
                                
                                {todo.completed ? <s>{todo.title}</s> : todo.title}

                                <Button
                                    type="button"
                                    theme="danger"
                                    onClick={() => deleteHandler(todo.id)}
                                    className="mr-auto float-right">
                                    <FaTrash /> Delete
                                </Button>
                                
                            </Card>
                        )
                    })}
                </div>
            </div>

            <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
                <TodoForm closeModal={() => setModalOpen(false)} />
            </Modal>
        </Layout>
    );
}
