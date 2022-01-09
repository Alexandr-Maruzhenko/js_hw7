let Contacts = function () {
    this.taskSelection = function () {
        let task = +prompt('Введите код задачи (число от 1 до 5):' + '\n\n' +
                                    '1 - загрузить тестовые данные,' + '\n'+
                                    '2 - добавить новый контакт,' + '\n'+
                                    '3 - проверка возраста контактов,' + '\n' +
                                    '4 - вывод информации о контакте,' + '\n' +
                                    '5 - вывод всех контактов.');
        switch (task) {
            case 1:
                this.loadData();
                return;

            case 2:
                this.addContact();
                return;

            case 3:
                this.checkAge();
                return;

            case 4:
                this.showContact();
                return;

            case 5:
                this.showAllContact();
                return;

            default:
                alert('Всего Вам доброго.');
        }
    }

    this.loadData = function () {
        this.alex = {
            surName: 'Маруженко',
            Name: 'Александр',
            middleName: 'Сергеевич',
            age: 43,
            telephone: '+375291234567',
            email: 'alex@gmail.com'
        }
        this.mayson = {
            surName: 'Сокольчик',
            Name: 'Руслан',
            middleName: 'Сергеевич',
            age: 44.1,
            telephone: '+375299876541',
            email: 'mayson@gmail.com'
        }
        this.CrazyRabbit = {
            surName: 'Пупкин',
            Name: 'Владлен',
            middleName: 'Самуилович',
            age: 17,
            telephone: '+792852625487',
            email: 'pupkin@gmail.com'
        }
        this.Ptichkin = {
            surName: 'Воробей',
            Name: 'Олег',
            middleName: 'Антонович',
            age: -35,
            telephone: '+375298526482',
            email: 'ptichkin@gmail.com'
        }
        alert('Тестовые данные загружены.');
        this.taskSelection();
    }

    this.addContact = function () {
        let nick = prompt('Введите Ваш ник:');
        let surName = prompt('Введите Вашу фамилию:');
        let Name = prompt('Введите Ваше имя:');
        let middleName = prompt('Введите Ваше отчество:');
        let age = +prompt('Введите Ваш возраст:');
        let telephone = prompt('Введите номер Вашего телефона:');
        let email = prompt('Введите адрес Вашей электронной почты:');

        this[nick] = {
            surName: surName,
            Name: Name,
            middleName: middleName,
            age: age,
            telephone: telephone,
            email: email
        }

        let a = prompt('Добавить следующий контакт? (да / нет)');
        switch (a) {
            case 'да':
                this.addContact();
                return;

            default:
                this.taskSelection();
                return;
        }
    }

    this.checkAge = function () {
        console.clear();
        for(let key in this) {
            if ('age' in this[key]) {
                let age = this[key]['age'];
                if ( (Number.isInteger(age)) && (Math.sign(age) === 1) && (age > 18) ){
                    console.log('У товарища с ником "' + key + '" с возрастом всё ОК! (' + this[key]['age'] + ')');
                }else if(!Number.isInteger(age)){
                    console.log('У товарища с ником "' + key + '" возраст НЕ ЦЕЛОЕ ЧИСЛО, либо ВОВСЕ НЕ ЧИСЛО, а это не верно! (' + this[key]['age'] + ')');
                }else if( (Math.sign(age) === -1) || (Math.sign(age) === -0)){
                    console.log('У товарища с ником "' + key + '" возраст ОТРИЦАТЕЛЬНОЕ ЧИСЛО, а это не верно! (' + this[key]['age'] + ')');
                }else {
                    console.log('У товарища с ником "' + key + '" возраст МЕНЬШЕ 18, а это не верно! (' + this[key]['age'] + ')');
                }
            }
        }
        this.taskSelection();
    }

    this.showContact = function () {
        console.clear();
        let str = '',
            y = 0;
        for(let key in this) {
            if ('surName' in this[key]) {
                y++;
                if (y===1) {
                    str = str + key;
                }else {
                    str = str + ', ' + key;
                }
            }
        }
        let findNick = prompt('Введите НИК контакта, для вывода подробной информации.' + '\n\n' +
                                        'НИКИ доступные для ввода:'+ '\n\n' + str);

        if (findNick in this){
            console.log('Ник - ' + findNick);
            for(let key in this[findNick]) {
                switch (key) {
                    case 'surName':
                        console.log('Фамилия - ' + this[findNick][key]);
                        break;
                    case 'Name':
                        console.log('Имя - ' + this[findNick][key]);
                        break;
                    case 'middleName':
                        console.log('Отчество - ' + this[findNick][key]);
                        break;
                    case 'age':
                        console.log('Возраст - ' + this[findNick][key]);
                        break;
                    case 'telephone':
                        console.log('Номер телефона - ' + this[findNick][key]);
                        break;
                    case 'email':
                        console.log('E-mail - ' + this[findNick][key]);
                        break;
                }
            }
            console.log('-------------------------------------');
        }else {
            alert('Ник ' + findNick + ' отсутствует в базе.')
        }
        this.taskSelection();
    }

    this.showAllContact = function () {
        console.clear();
        for(let key in this) {
            if ('surName' in this[key]) {
                console.log('Ник - ' + key);
                console.log('Фамилия - ' + this[key]['surName']);
                console.log('Имя - ' + this[key]['Name']);
                console.log('Отчество - ' + this[key]['middleName']);
                console.log('Возраст - ' + this[key]['age']);
                console.log('Телефон - ' + this[key]['telephone']);
                console.log('E-mail - ' + this[key]['email']);
                console.log('-------------------------------------');
            }
        }
        this.taskSelection();
    }
}

alert('Для просмотра результатов откройте консоль.')
let contacts = new Contacts();
contacts.taskSelection();
