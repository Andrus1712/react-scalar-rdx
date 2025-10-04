import { useLoaderData } from "react-router";

export default function Team() {
    const data = useLoaderData();
    console.log(data);

    return (
        <>
            <h1>Hello world</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}
