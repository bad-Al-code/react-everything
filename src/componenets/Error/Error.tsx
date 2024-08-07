import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <>
      <h1>Oops...</h1>
      <p>
        {isRouteErrorResponse(error)
          ? "Invalid Page"
          : "Sorry, an unexpected error has occured"}
      </p>
    </>
  );
}

export default Error;
