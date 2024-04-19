import styles from './login.module.css';

function Login() {
  return (
    <div className={styles.xablau}>
      <form className={ styles.container_form}>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;