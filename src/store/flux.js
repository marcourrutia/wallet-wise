
const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      first_name: [],
      last_name: [],
      email: [] 
    },
    actions: {
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
              email: email 
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
