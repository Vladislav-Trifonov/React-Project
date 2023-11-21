function Register() {
  return (
    <section className="register-section">
      <form action="" className="register-form">
        <div>
          <label htmlFor="email">Имейл:</label>
          <input type="text" id="email" />
        </div>

        <div>
          <label htmlFor="password">Парола:</label>
          <input type="text" id="password" />
        </div>

        <div>
          <label htmlFor="re-password">Потвърди Парола :</label>
          <input type="text" id="re-password" />
        </div>
      </form>
    </section>
  );
}

export default Register;
