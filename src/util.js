export default function displayOnHTML(data) {
return `<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./output.css" />
        <title>My Team</title>
    </head>

    <body>
        <header>
            My Team
        </header>

        <section>
            ${data.managers.map((value) => displayEmployeeCard(value))}
            ${data.engineers.map((value) => displayEmployeeCard(value))}
            ${data.interns.map((value) => displayEmployeeCard(value))}
        </section>
    </body>
</html>`;
}

function displayEmployeeInfo(employee) {
    let lastInfo;
    if(employee.getRole() === "Manager") {
        lastInfo = `<li class="list-group-item">${employee.getOfficeNumber()}</li>`;
    }

    if(employee.getRole() === "Engineer") {
        lastInfo = `<a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`
    }

    if (employee.getRole() === "Intern") {
        lastInfo = `<li class="list-group-item">${employee.getSchool()}</li>`;
    }

    return `<li class="list-group-item">${employee.getId()}</li>
            <li class="list-group-item">${employee.getEmail()}</li>
            ${lastInfo}
    `;
}

function displayEmployeeTitle(employee) {
    return  `<header class="card-header">
                    <p>
                        ${employee.getName()}
                    </p>
                
                    <p>
                        ${employee.getRole()}
                    </p>
                </header>`;             
}

function displayEmployeeCard(employee) {
    return  `<section class="card">
                ${displayEmployeeTitle(employee)} 
                <section>
                    <ul class="list-group list-group-flush">
                        ${displayEmployeeInfo(employee)}
                    </ul>
                </section>
            </section>`;
}