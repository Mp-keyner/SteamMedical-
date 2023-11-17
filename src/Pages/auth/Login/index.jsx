import React, { useContext, useEffect } from "react";
import { GlobalStyles } from "../../../styles/GlobalStyles";
import Logo from "../../../components/Logo";
import { useLogin } from "../../../hook/useLogin";
import instance from "../../../api/api";
import Styles from "./Styles";
import {
  ColombiaGov,
  ColombiaVida,
  Eye,
  EyeNot,
  Facebook,
  Google,
  Instagram,
  YouTube,
} from "../../../../public/img/svg";

const Login = () => {
  useEffect(() => {
    const GetaData = async () => {
      const users = await instance.get("/testimony");
      console.log(users);
    };
    GetaData();
  }, []);
  const { singin } = useLogin();
  return (
    <div style={Styles.containerPages}>
      <div style={{ display: "flex" }}>
        <div style={{ ...Styles.containerSection, ...GlobalStyles.colum }}>
          <h1 style={Styles.h1}>STEAM MEDICAL</h1>
          <p style={Styles.P}>
            ¡Bienvenido de nuevo! Por favor ingrese sus datos.
          </p>
          <form style={{ ...Styles.Form, ...Styles.P }}>
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
            <button style={{ ...GlobalStyles.borderBtn, ...Styles.P }}>
              Iniciar sesión
            </button>
            <button
              style={{
                ...GlobalStyles.borderBtn,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6pc",
                ...Styles.P,
              }}
              onClick={(e) => {
                e.preventDefault();
                singin();
              }}
            >
              <Google width={2} color={"#fff"} />
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
              width: "30pc",
              textOverflow: "ellipsis",
              //   border: "1px solid red",
              height: "9pc",
              //   marginBottom: "9pc",
              ...Styles.h1,
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
            width: "100%",
            ...GlobalStyles.SpaceBetween,
            padding: "0 15pc",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.2pc",
              flexDirection: "column",
              // border: "1px solid red",
              width: "19pc",
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
            <p style={Styles.P}>©2023 - SteamMedical.</p>
            <p style={Styles.P}>Todos los derechos reservados.</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6pc",
              }}
            >
              <Instagram />
              <Facebook />
              <YouTube color={"#fff"} width={2} />
            </div>
          </div>
          <div style={GlobalStyles.colum}>
            <ColombiaVida />
            <ColombiaGov />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
