import { Image } from "react-bootstrap";
import useCurrentUser from "../../hooks/useCurrentUser";

const UserInfo = () => {
  const [user, error] = useCurrentUser();
  const avatar_path = user.avatar.tmdb.avatar_path
  const avatar_url = avatar_path == null ? '/logo192.png' : 
    `${process.env.REACT_APP_IMAGE_TMDB_URL}${avatar_path}`

  return (
    <>
    {
      user ? (
        <div className="d-flex gap-2">
          {/* <b className="text-light m-auto w-auto">{user.username}</b> */}
          <Image src={avatar_url} width={38} height={38}
            className="m-auto" roundedCircle />
        </div>
      ) :
      <div>{error}</div>
    }
    </>
  )
};

export default UserInfo;
