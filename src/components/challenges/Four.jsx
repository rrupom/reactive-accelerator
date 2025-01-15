import { forwardRef, useRef } from "react";

function SearchButton({ onClick }) {
  return <button onClick={onClick}>Search</button>;
}

const SearchInput = forwardRef(function SearchInput(props, ref) {
  return <input ref={ref} placeholder="Looking for something" />;
});

export default function Page() {
  const inputRef = useRef(null);

  return (
    <>
      <nav>
        <SearchButton
          onClick={() => {
            inputRef.current.focus();
          }}
        />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}
