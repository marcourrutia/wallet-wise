const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      first_name: [],
      last_name: [],
      email: [],
      isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")),
      userId: JSON.parse(localStorage.getItem("userId")),
      userFullName: JSON.parse(localStorage.getItem("userFullName")),
      accessToken: JSON.parse(localStorage.getItem("accessToken")),
    },
    actions: {
      setIsAuthenticated: (value) => {
        setStore({ isAuthenticated: value });
        localStorage.setItem("isAuthenticated", JSON.stringify(value));
      },
      setUserId: (value) => {
        setStore({ userId: value });
        localStorage.setItem("userId", JSON.stringify(value));
      },
      setUserFullName: (firstName, lastName) => {
        setStore({ userFullName: firstName + "" + lastName });
        localStorage.setItem(
          "userFullName",
          JSON.stringify(firstName + " " + lastName)
        );
      },
      setAccessToken: (value) => {
        setStore({ accessToken: value });
        localStorage.setItem("accessToken", JSON.stringify(value));
      },
      postToken: async (firstName, lastName, email) => {
        try {
          console.log(lastName);
          const response = await fetch("http://localhost:5050/login_google", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              first_name: firstName,
              last_name: lastName,
              email: email,
            }),
          });

          if (!response.ok) {
            throw new Error("There is an error");
          }

          const data = await response.json();
          console.log("Respuesta del backend:", data);
        } catch (error) {
          console.error("Error al enviar el token:", error);
        }
      },
    },
  };
};

export default getState;
