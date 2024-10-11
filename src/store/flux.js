import { TransactionTab } from "../components/Maintainer/TransactionTab";

const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      accounts: [],
      movementByAccount: [],
      categorySave: [],
      first_name: [],
      last_name: [],
      email: [],
      isAuthenticated:
        JSON.parse(localStorage.getItem("isAuthenticated")) || false,
      userId: JSON.parse(localStorage.getItem("userId")) || null,
      userFullName: JSON.parse(localStorage.getItem("userFullName")) || "",
      accessToken: localStorage.getItem("jwt-token") || null,
      movements: [],
      categories: [],
      transaction: [],
      flowSelected: localStorage.getItem("flowSelected") || "",
    },
    actions: {
      setIsAuthenticated: (value) => {
        setStore({ isAuthenticated: value });
        localStorage.setItem("isAuthenticated", JSON.stringify(value));
      },
      setFlowSelected: (value) => {
        setStore({ flowSelected: value });
        localStorage.setItem("flowSelected", value);
      },
      setUserId: (value) => {
        setStore({ userId: value });
        localStorage.setItem("userId", JSON.stringify(value));
      },
      setUserFullName: (firstName, lastName) => {
        setStore({ userFullName: firstName + " " + lastName });
        localStorage.setItem(
          "userFullName",
          JSON.stringify(firstName + " " + lastName)
        );
      },
      setAccessToken: (value) => {
        setStore({ accessToken: value });
        localStorage.setItem("jwt-token", value);
      },
      postToken: async (firstName, lastName, email) => {
        try {
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
          if (data.access_token) {
            localStorage.setItem("jwt-token", data.access_token);
            setStore({ accessToken: data.access_token });
          } else {
            console.error("Token not received in response");
          }
        } catch (error) {
          console.error("Error al enviar el token:", error);
        }
      },
      getMovements: () => {
        const token = localStorage.getItem("jwt-token");
        if (!token) {
          console.error("Token not found. User might not be authenticated.");
          return;
        }
        fetch("http://localhost:5050/type_of_movements", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({
              movements: data,
            });
          })
          .catch((error) => console.log(error));
      },
      getCategory: () => {
        const token = localStorage.getItem("jwt-token");
        if (!token) {
          console.error("Token not found. User might not be authenticated.");
          return;
        }
        fetch("http://localhost:5050/categorys", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({
              categories: data,
            });
          })
          .catch((error) => console.log(error));
      },
      getTransaction: () => {
        const token = localStorage.getItem("jwt-token");
        if (!token) {
          console.error("Token not found. User might not be authenticated.");
          return;
        }
        fetch("http://localhost:5050/transactions", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({
              transaction: data,
            });
          })
          .catch((error) => console.log(error));
      },
      createMovements: (movements) => {
        const token = localStorage.getItem("jwt-token");
        if (!token) {
          console.error("Token not found. User might not be authenticated.");
          return;
        }
        fetch("http://localhost:5050/type_of_movement", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(movements),
        })
          .then((response) => {
            response.json();
            getActions().getMovements();
          })
          .then((data) => {
            getActions().getMovements();
          })
          .catch((error) => console.log(error));
      },
      postFlow: async (nameFlow) => {
        const token = localStorage.getItem("jwt-token");
        if (!token) {
          console.error(
            "Token not found. User might not be authenticated.POST"
          );
          return;
        }
        try {
          const response = await fetch("http://localhost:5050/account", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: nameFlow,
            }),
          });
          if (!response.ok) {
            throw new Error("There is an error");
          }
          getActions().getFlow();
        } catch (error) {
          console.error("Error al enviar el token post:", error);
        }
      },
      getFlow: async () => {
        const token = localStorage.getItem("jwt-token");
        if (!token) {
          console.error("Token not found. User might not be authenticated.");
          return;
        }
        try {
          const response = await fetch("http://localhost:5050/account", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error("There is an error");
          }
          const data = await response.json();
          setStore({
            accounts: data,
          });
        } catch (error) {
          console.error("Error al enviar el token get:", error);
        }
      },
      deleteFlow: (flowId) => {
        const token = localStorage.getItem("jwt-token");
        if (!token) {
          console.error("Token not found. User might not be authenticated.");
          return;
        }
        fetch(`http://localhost:5050/account/${flowId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              getActions().getFlow();
            }
          })
          .catch((error) => console.log(error));
      },
      updateStateFlow: (flowId) => {
        const token = localStorage.getItem("jwt-token");
        if (!token) {
          console.error("Token not found. User might not be authenticated.");
          return;
        }
        fetch(`http://localhost:5050/account/state/${flowId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Failed to update flow state");
            }
          })
          .then((data) => {
            getActions().getFlow();
          })
          .catch((error) => {
            console.error("Error updating flow state:", error);
          });
      },
      getMovementsFlow: async (accountId) => {
        const token = localStorage.getItem("jwt-token");
        if (!token) {
          console.error("Token not found. User might not be authenticated.");
          return;
        }
        try {
          const response = await fetch(
            `http://localhost:5050/movement/${accountId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (!response.ok) {
            throw new Error("There is an error");
          }
          const data = await response.json();
          setStore({
            movementByAccount: data.movement,
            categorySave: data.category,
          });
        } catch (error) {
          console.error("Error al enviar el token get:", error);
        }
      },
    },
  };
};

export default getState;
