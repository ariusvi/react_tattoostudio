export const validame = (type, value) => {

    switch (type) {
        case "first_name":
            if (value.length < 3) {
                return "El nombre debe tener minimo 3 caracteres"
            }
            return "";

        case "last_name":

            if (value.length < 3) {
                return "El apellido debe tener minimo 3 caracteres"
            }
            return "";

        case "email":
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

            if (!emailRegex.test(value)) {
                return "Por favor, el formato del email debe de ser correcto.";
            }

            return "";

        case "password":

        if (value.length < 6) {
            return "El apellido debe tener minimo 6 caracteres"
        }
        return "";

        default:
            console.log("patatitas fritas");
    }
}