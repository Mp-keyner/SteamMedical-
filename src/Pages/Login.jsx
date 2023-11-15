import React, { useContext } from "react";
import ImgGoogle from "/img/Google.svg";
import instagram from "/img/instagram.svg";
import Facebook from "/img/Facebook.svg";
import Youtube from "/img/Youtube.svg";
import ColombiaGov from "/img/ColombiaGov.svg";
import ClombiaVisa from "/img/ClombiaVisa.svg";
import { GlobalStyles } from "../styles/GlobalStyles";
import Logo from "../components/Logo";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { BtnLogin } = useContext(AuthContext);
  return (
    <div style={Styles.containerPages}>
      <div style={{ display: "flex" }}>
        <div style={{ ...Styles.containerSection, ...GlobalStyles.colum }}>
          <h1>STEAM MEDICAL</h1>
          <p>¡Bienvenido de nuevo! Por favor ingrese sus datos.</p>
          <form style={Styles.Form}>
            <label htmlFor="email" style={Styles.containerInput}>
              <p>Email</p>
              <input
                type="email"
                placeholder="Ingresa tu Email"
                name="email"
                style={GlobalStyles.borderBtn}
              />
            </label>
            <label htmlFor="Password" style={Styles.containerInput}>
              <p>Contraseña</p>
              <input
                type="password"
                placeholder="Ingresa tu Contraseña"
                name="password"
                style={GlobalStyles.borderBtn}
              />
            </label>
            <button style={GlobalStyles.borderBtn}>Iniciar sesión</button>
            <button
              style={{
                ...GlobalStyles.borderBtn,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6pc",
              }}
              onClick={(e) => {
                e.preventDefault();
                BtnLogin();
              }}
            >
              <img src={ImgGoogle} alt="" />
              Inicia sesión con Google
            </button>
          </form>
        </div>
        <div
          style={{
            ...Styles.containerSection,
            ...GlobalStyles.center,
            alignItems: "end",
            justifyContent: "flex-start",
          }}
        >
          <p
            style={{
              fontSize: "2.5pc",
              fontWeight: "bold",
              width: "344.956px",
              textOverflow: "ellipsis",
              //   border: "1px solid red",
              height: "9pc",
              //   marginBottom: "9pc",
            }}
          >
            Tu salud nuestra preocupación
          </p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            ...Styles.containerSection,
            height: "29vh",
            ...GlobalStyles.center,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.2pc",
              flexDirection: "column",
              //   border: "1px solid red",
              width: "18pc",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6pc",
              }}
            >
              <h2>SteamMedical</h2>
              <Logo color={"#fff"} widthSvg={"2pc"} colorHover={"red"} />
            </div>
            <p>©2023 - SteamMedical.</p>
            <p>Todos los derechos reservados.</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6pc",
              }}
            >
              <img src={instagram} alt="Instagram" />
              <img src={Facebook} alt="Facebook" />
              <img src={Youtube} alt="Youtube" />
            </div>
          </div>
        </div>
        <div
          style={{
            ...Styles.containerSection,
            height: "29vh",
            ...GlobalStyles.colum,
          }}
        >
          <img src={ColombiaGov} alt="ColombiaGov" width={150} />
          <img src={ClombiaVisa} alt="ClombiaVisa" width={150} />
        </div>
      </div>
    </div>
  );
};

const Styles = {
  containerPages: {
    backgroundImage: "url('/img/LoginMedical.png')",
    // height: "130vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
  },
  containerSection: {
    // border: "1px solid red",
    width: "50%",
    height: "80vh",
  },
  Login: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerInput: {
    display: "flex",
    flexDirection: "column",
    gap: "0.6pc",
    // border: "1px solid red",
    width: "23pc",
  },
  Form: {
    marginTop: "2pc",
    display: "flex",
    flexDirection: "column",
    gap: "1pc",
  },
};
export default Login;
