import { Link } from '@inertiajs/react';

interface Props {
    //
}

export default function Header({}: Props) {
    return (
        <header className="flex min-h-[80px] items-center bg-gray-600 text-white">
            <div className="container flex items-center justify-between py-4">
                <Link href="/">MyToDo's</Link>
            </div>
        </header>
    );
}
