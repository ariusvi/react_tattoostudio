const root = "http://localhost:4001/api/"

export const loginMe = async (credenciales) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credenciales),
    };

    // auth/login
    const response = await fetch(`${root}auth/login`, options)
    const data = await response.json()

    return data;
}