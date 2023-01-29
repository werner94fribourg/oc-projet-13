import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyUserProfile } from '../../../store/slices/user';
import styles from './ProfileHeader.module.scss';

const ProfileHeader = () => {
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
  }, [user]);

  const firstNameInputHandler = event => {
    const {
      target: { value },
    } = event;
    setDisabled(value === '' ? true : false);
    setFirstName(value);
  };

  const lastNameInputHandler = event => {
    const {
      target: { value },
    } = event;
    setDisabled(value === '' ? true : false);
    setLastName(value);
  };

  const editBtnHandler = () => {
    setEdit(true);
  };

  const cancelBtnHandler = () => {
    setEdit(false);
  };

  const submitFormHandler = event => {
    event.preventDefault();

    const user = { firstName, lastName };

    if (!firstName || !lastName) return;

    modifyUserProfile(auth.token, user, dispatch);

    setEdit(false);
  };

  return (
    <div className={styles.header}>
      <h1 className={styles['header__title']}>
        Welcome back
        <br />
        {`${user.firstName} ${user.lastName}!`}
      </h1>
      {!edit && (
        <button className={styles['header__edit-btn']} onClick={editBtnHandler}>
          Edit Name
        </button>
      )}
      {edit && (
        <form
          className={styles['header__edit-form']}
          onSubmit={submitFormHandler}
        >
          <div className={styles['header__edit-form-inputs']}>
            <input
              placeholder="First Name"
              type="text"
              id="firstname"
              className={styles['header__edit-form-input']}
              value={firstName}
              onChange={firstNameInputHandler}
            />
            <input
              placeholder="Last Name"
              type="text"
              id="lastname"
              className={styles['header__edit-form-input']}
              value={lastName}
              onChange={lastNameInputHandler}
            />
          </div>
          <div className={styles['header__edit-form-btns']}>
            <button
              className={styles['header__form-edit-btn']}
              type="submit"
              disabled={disabled}
            >
              Save
            </button>
            <button
              className={styles['header__form-edit-btn']}
              type="button"
              onClick={cancelBtnHandler}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfileHeader;
