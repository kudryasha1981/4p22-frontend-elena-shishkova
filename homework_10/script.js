const getUsers = () => {
    const url = 'https://reqres.in/api/users?per_page=12';
    

    fetch(url)
    .then((result) => {
        return result.json();
    })
    .then(({data:users}) => {
        console.log('-----------------');
        console.log('Пункт №1');
        console.log('');

        users.forEach(({ last_name: lastName }) => {
            console.log(lastName);
        });
        console.log('-----------------');
        return users;
    })
    .then((users) => {
        console.log('-----------------');
        console.log('Пункт №2');
        console.log('');

        users.filter(({ last_name: lastName }) => lastName.startsWith('F'))
        .forEach(({ last_name: lastName }) => {
            console.log(lastName);
        });
        console.log('-----------------');
        return users;
    })
    .then((users) => {
        
        console.log('-----------------');
        console.log('Пункт №3');
        console.log('');
        console.log('Наша база содержит данные следующих пользователей:')

        users.forEach(({last_name:lastName, first_name:firstName}) => {
            console.log(lastName + ' ' + firstName)
        });
        

        console.log('-----------------');
        return users;
    })
    .then((users) => {
        console.log('-----------------');
        console.log('Пункт №4');
        console.log('');

        result = users.reduce((last_name, first_name) => last_name + '' + first_name);
        console.log(users);

        console.log('-----------------');
        return users;
    })
};

getUsers()