# Ract Frontend: Old Ink
<img src="./src/img/banner.png" alt="OldInkBanner">  

Welcome to the Old Ink's frontend api documentation. This api recreates a fictional website of a tatto studio. This project is the frontend of [backend_services](https://github.com/ariusvi/backend_services) project.

---
    

# Contenido 📂
  <ol>
    <li><a href="# About the project 🎨">About the project 🎨</a></li>
    <li><a href="# Stack ⚓">Stack ⚓</a></li>
    <li><a href="# Local installation 💻">Local installation 💻</a></li>
    <li><a href="# Roots 🔗">Roots 🔗</a></li>
    <li><a href="# Bugs 🐜">Bugs 🐜</a></li>
    <li><a href="# Cool detail 🎉">Cool detail 🎉</a></li>
    <li><a href="# Future features ✨">Future features ✨</a></li>
    <li><a href="# Author ✒️">Author ✒️</a></li>
    <li><a href="# Acknowledgements 🙏">Acknowledgements 🙏</a></li>
    </ol>

# About the project 🎨
This project is the frontend part of a fictional tattoo studio. React has been mainly used. This project connects to a MySQL database from project [backend_services](https://github.com/ariusvi/backend_services).

On the Home page we find a small description of the tattoo studio, as well as the registration buttons (which redirects the user to the registration area) and the services button (which redirects the user to the services area that are performed in the tattoo studio. tattoos)
At the top, we find a header that is the navigation bar with the buttons: Home, Login and Register, which redirect the user to the different pages of the website.

In the Login area, the user can log in through a form. Once the user has been logged in, the login header changes to the user's name and if clicked redirects to said user's profile.
In the profile, the user can edit the data: name, surname and email. Additionally, you can access the appointment area, through the appointment button.

On the appointments page, the user can view and delete their upcoming appointments as well as create a new appointment.


# Stack ⚓
<div align="center">
<a href="https://www.reactjs.com/">
    <img src= "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
</a>
<a href="">
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white" alt="Node JS"/>
</a>
<a href="">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/bcrypt-3178C6?style=for-the-badge&" alt="TypeScript" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" alt="ExpressJS" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black" alt="Photoshop" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Gi" />
</a>
 </div>

 # Local installation 💻
 ## Backend
 - Go to: [backend_services](https://github.com/ariusvi/backend_services)
1. Clone the repository
 ` $ git clone https://github.com/ariusvi/backend_services `
2. Install dependencies
 ``` $ npm install --y ``` 
3. Start Express on the server
 ``` $ npm run dev ```
4. Run migrations
 ``` $ npm run run-migrations ``` 

## Frontend
1. Clone the repository
 ` $ git clone https://github.com/ariusvi/react_tattoostudio `
2. Install dependencies
 ``` $ npm install --y ``` 
3. Start Express on the server
 ``` $ npm run dev ```

 ## Users credentials
- User
```json
id: "1",
first_name: "user",
last_name: "user_apellido",
email: "user@email.com",
password: 123456,
role: "user"
```
- Admin
```json
id: "2",
first_name: "admin",
last_name: "admin_apellido",
email: "admin@email.com",
password: 123456,
role: "admin"
```
- Super_admin
```json
id: "3",
first_name: "super_admin",
last_name: "superadmin_apellido",
email: "superadmin@email.com",
password: 123456,
role: "admin"
```

# Roots 🔗

1. Home  

<img src="./src/img/01.jpg">  


2. Login  

<img src="./src/img/02.jpg">  


3. Register  

<img src="./src/img/03.jpg">  


4. Services  

<img src="./src/img/04.jpg">  


5. Profile  

<img src="./src/img/05.jpg">  


6. Appointments

<img src="./src/img/06.jpg">  


7. super_admin Profile

<img src="./src/img/07.jpg">


8. superadmin access

<img src="./src/img/08.jpg">

# Bugs 🐜
- There isn't time restriction at Appointments, user only choose a date
- Services are choosen by ID, not by name.

# Cool detail 🎉
Loading gif created with [ldrs library](https://uiball.com/ldrs/)

<img src="./src/img/loading.gif">

# Future features ✨
- Date and time restrictions when create an appointment
- Ability to modify service and date in an already scheduled appointment
- Allow super admin to create and modify services
- Responsive design
- Deploy backend and frontend
- Design a footer

# Author ✒️
* Ana Rius 
    * [GitHub](https://github.com/ariusvi)

# Acknowledgements 🙏
Thanks to my classmates:<br>
Pedro for his patience and help, especially to confirm that I understand things.<br>
Marina and Marta for her moral support, joint laughter and tears, as well as her help.<br>