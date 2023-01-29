import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from '../../../store/slices/auth';
import styles from './SigninForm.module.scss';

const SigninForm = () => {
  const [feedback, setFeedback] = useState(null);
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const loginHandler = event => {
    event.preventDefault();
    const credentials = {
      email: userNameRef.current.value,
      password: passwordRef.current.value,
    };

    connect(credentials, dispatch).then(data => {
      if (data !== undefined) {
        setFeedback({
          type: data.type,
          message: data.message,
        });
      }
    });
  };

  return (
    <section className={styles.section}>
      <FontAwesomeIcon
        className={styles['section__icon']}
        icon={faUserCircle}
      />
      <h1>Sign In</h1>
      <form onSubmit={loginHandler}>
        <div className={styles['section__input']}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={userNameRef} />
        </div>
        <div className={styles['section__input']}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <div className={styles['section__remember-me']}>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className={styles['section__submit-btn']}>
          Sign In
        </button>
      </form>
      {feedback && (
        <p className={styles['section__error-message']}>{feedback.message}</p>
      )}
    </section>
  );
};

export default SigninForm;
