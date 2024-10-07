import { IoLogOutSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  authSelector,
  logout,
  updateUser,
} from "../../redux/reducers/auth_reducer";

export default function Account() {
  const dispatch = useDispatch();

  const { loggedUser } = useSelector(authSelector);

  const callUpdateUser = (e) => {
    e.preventDefault();
    const userDetails = {
      username: e.target.username.value,
      address: e.target.address.value,
      city: e.target.city.value,
      zip: e.target.zip.value,
      country: e.target.country.value,
      phone: e.target.phone.value,
    };
    dispatch(updateUser(userDetails));
    e.target.reset();
  };

  return (
    <section className="account-sec">
      <div className="head">
        <div></div>
        <h1>Account</h1>
        <a href="/"><div onClick={() => dispatch(logout())}>
          Logout&nbsp;&nbsp;&nbsp;
          <IoLogOutSharp size={35} />
        </div>
        </a>
      </div>

      <div>
        <form className="account-form" onSubmit={callUpdateUser}>
          <div>
            <label htmlFor="username">My Name:</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder={loggedUser.username}
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder={loggedUser.address?.address}
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder={loggedUser.address?.city}
            />
          </div>
          <div>
            <label htmlFor="zip">Zip Code:</label>
            <input
              type="text"
              name="zip"
              id="zip"
              placeholder={loggedUser.address?.zip}
            />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder={loggedUser.address?.country}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder={loggedUser.phone}
            />
          </div>
          <button type="submit">Update Details</button>
        </form>
      </div>
    </section>
  );
}
