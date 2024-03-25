const root = "http://localhost:4001/api/"

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
        throw new Error (data.message)
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
        throw new Error (data.message)
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
        throw new Error (data.message)
    }

    return data;
    } catch (error) {
        return error
    }

};

export const updateProfile = async (token, data) => {

    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Baerer ${token}`
        },
        body: JSON.stringify(data), 
    };

    try {
    // users/profile
    const response = await fetch(`${root}users/profile`, options)
    const data = await response.json()
        
    if (!data.success) {
        throw new Error (data.message)
    }

    return data;
    } catch (error) {
        return error
    }

};