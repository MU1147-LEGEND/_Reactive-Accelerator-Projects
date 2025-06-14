import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError(); // catching the actual error.
    console.error(error);

    // showing UI error message
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
