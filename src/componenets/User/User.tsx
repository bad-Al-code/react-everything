import { useLocation, useParams, useSearchParams } from "react-router-dom";
const User = () => {
  const params = useParams();
  console.log(params);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));

  const location = useLocation();
  console.log(location);

  return (
    <>
      <div className="bg-gray-600 text-white p-4 text-3xl text-center">
        {/* User: {userid} */}
      </div>
    </>
  );
};
export default User;
