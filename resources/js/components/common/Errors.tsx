interface Props {
    errors?: any;
}

export default function Errors({ errors }: Props) {
    if (!errors || !Object.keys(errors).length) return null;

    return (
        <div className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
            <strong className="font-bold">Whoops!</strong>
            <span className="block">
                There were some problems with your input.
            </span>
            <ul className="list-inside list-disc">
                {Object.entries(errors).map(([key, value]) => (
                    // @ts-ignore
                    <li key={key}>{value}</li>
                ))}
            </ul>
        </div>
    );
}
