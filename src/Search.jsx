import { useState } from "react";
import { useSearchParams } from "react-router";

const Search = () => {
    const [searchValue, setSearchValue] = useSearchParams();
    const query = searchValue.get("q");
    const [term, setTerm] = useState(query || "");

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchValue((p) => ({ ...p, q: term }));
    };
    return (
        <>
            <h1>Search</h1>
            <form
                action=""
                onSubmit={(e) => {
                    handleSearch(e);
                }}
            >
                <input
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
                <input
                    type="submit"
                    value={"Submit"}
                    className="btn btn-primary"
                />
            </form>
        </>
    );
};
export default Search;
