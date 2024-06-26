const root = "http://localhost:4000/api/"

export const loginUser = async (credenciales) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credenciales),
    };

    try {
        // auth/login
        const response = await fetch(`${root}auth/login`, options)
        const data = await response.json()

        if (!data.success) {
            throw new Error(data.message)
        }

        return data;
    } catch (error) {
        return error
    }

};

export const registerUser = async (user) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
    };

    try {
        // auth/register
        const response = await fetch(`${root}auth/register`, options)
        const data = await response.json()

        if (!data.success) {
            throw new Error(data.message)
        }

        return data;
    } catch (error) {
        return error
    }

};

export const getProfile = async (token) => {

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Baerer ${token}`
        },
    };

    try {
        // users/profile
        const response = await fetch(`${root}users/profile`, options)
        const data = await response.json()

        if (!data.success) {
            throw new Error(data.message)
        }

        return data;
    } catch (error) {
        return error
    }

};

export const updateProfile = async (token, newData) => {

    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Baerer ${token}`
        },
        body: JSON.stringify(newData),
    };

    try {
        // users/profile
        const response = await fetch(`${root}users/profile`, options)
        const data = await response.json()

        if (!data.success) {
            throw new Error(data.message)
        }

        return data.data; //devuelve el usuario
    } catch (error) {
        return error
    }
};

export const getFacilities = async () => {

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    };

    try {
        // services
        const response = await fetch(`${root}services`, options);
        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        return error;
    }
};

export const getAppointments = async (token) => {

    const response = await fetch(`${root}` + "appointments", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.json();
}

export const createAppointments = async (token, appointmentsData) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(appointmentsData)
    };

    try {
        const response = await fetch(`${root}appointments`, options);

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        return error;
    }
}

export const deleteAppointments = async (token, appointmentId) => {

    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ appointmentId })
    }

    try {
        const response = await fetch(`${root}appointments`, options)
        const data = await response.json()

        if (!data.success) {
            throw new Error(data.message)
        }

        return data
    } catch (error) {
        return error
    }
};

export const getUsers = async (token) => {

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    }

    try {
        const response = await fetch(`${root}users`, options)
        const data = await response.json()

        if (!data.success) {
            throw new Error(data.message)
        }

        return data

    } catch (error) {
        return error
    }
};

export const deleteUser = async (token, userId) => {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ id:userId })
    }
    try {
        const response = await fetch(`${root}users/`, options) 

        const data = await response.json()

        if (!data.success) {
            throw new Error(data.message)
        }

        return data

    } catch (error) {
        return error
    }
};