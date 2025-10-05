import { useParams } from "react-router";

export default function SettingsPage() {
    const params = useParams();
    return (
        <div>
            <pre>{JSON.stringify(params, null, 2)}</pre>
        </div>
    );
}
