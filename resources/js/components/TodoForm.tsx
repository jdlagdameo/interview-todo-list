import { useForm } from '@inertiajs/react';
import { handleChange, useSubmit } from '@/lib/forms';
import Button from './common/Button';
import Errors from './common/Errors';

interface Props {
    closeModal: () => void;
}

export default function TodoForm({ closeModal }: Props) {
    const { post, data, setData, errors } = useForm({
        title: '',
    });

    const onSubmit = useSubmit({
        message: 'Todo saved',
        onSuccess: () => {
            closeModal();
        },
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        post(`/todos`, onSubmit);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Errors errors={errors} />

            <label>
                Title
                <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={(event) => handleChange({ event, data, setData })}
                    value={data.title}
                />
            </label>

            <div className="flex items-center justify-end gap-6">
                {/* BRIEF: Ability to close the modal */}

                <Button theme="primary" type="submit">
                    Save ToDo
                </Button>
            </div>
        </form>
    );
}
