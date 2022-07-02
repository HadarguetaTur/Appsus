import { storageService } from '../../../services/async-storage-service.js';
import { utilService } from '../../../services/util-Service.js';

const EMAIL_KEY = 'emails';
createEmails();

export const mailService = {
    query,
    remove,
    save,
    get,
    getUser,
    createEmail,
    setFilter,
    mailFilterByType,
    update,
    toggleRead,
    toggleStar,
    readMail,
    createEmails
};

function query() {
    return storageService.query(EMAIL_KEY)
}

function remove(mailId) {
    return storageService.remove(EMAIL_KEY, mailId)
}

function get(mailId) {
    return storageService.get(EMAIL_KEY, mailId)
}
function update(mail) {
    return storageService.put(EMAIL_KEY, mail)
}

function toggleRead(mail) {
    mail.isRead = !mail.isRead
}

function readMail(mailId) {
    return query()
        .then(mails => {
            var currMail = mails.find(mail => mail.id === mailId);
            currMail.isRead = true;
            return storageService.put(EMAIL_KEY, currMail);

        })
}

function toggleStar(mail) {
    mail.isStared = !mail.isStared
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function save(mail) {
    return storageService.post(EMAIL_KEY, mail)

}

function createEmails() {
    let mails = utilService.loadFromStorage(EMAIL_KEY);
    if (!mails || !mails.length) {
        mails = [{
            id: utilService.makeId(),
            "subject": "et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis",
            "body": "elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
            "isRead": true,
            "isDraft": true,
            "isStared": false,
            "sentAt": '00:40 AM',
            "to": "Shad Huber",
            "from": "integer.urna@outlook.edu",
            "type": "inbox",
            "extended": false,
            "name": "yossi"
        },
        {
            id: utilService.makeId(),
            "subject": "et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis",
            "body": "elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
            "isRead": true,
            "isDraft": true,
            "isStared": false,
            "sentAt": '01:20 AM',
            "to": "Shad Huber",
            "from": "integer.urna@outlook.edu",
            "type": "inbox",
            "extended": false,
            "name": "haim"
        },
        {
            id: utilService.makeId(),
            "subject": "Matan invited you as a teammate on 'Meme Generator v1.1' project in Zeplin.",
            "body": "If you prefer not to use “zelzernim@gmail.com” as your Zeplin email or already have a Zeplin account, please request another invitation to that email from “matan.cris@gmail.com",
            "isRead": false,
            "isDraft": false,
            "isStared": true,
            "sentAt": '07:51 AM',
            "to": "Ciaran Hobbs",
            "from": "a.dui@google.edu",
            "type": "inbox",
            "extended": false,
            "name": "lior"
        },
        {
            id: utilService.makeId(),
            "subject": "What happens to washed up programmers (40 years old and over) who don’t move up to management?",
            "body": "I'm 65 years old. I'm the highest paid engineer in the company…I earn more than my boss. I tried a management job once…I hated it and resigned after a month or so.",
            "isRead": true,
            "isDraft": true,
            "isStared": false,
            "sentAt": '08:52 AM',
            "to": "Aspen Mcbride",
            "from": "facilisi.sed.neque@protonmail.org",
            "type": "sent",
            "extended": false,
            "name": "quora digestion"
        },
        {
            id: utilService.makeId(),
            "subject": "What are the most in-demand freelance jobs for 2022?",
            "body": "The demand for remote designers, developers, project managers, and finance experts is ramping up, and will continue to grow moving forward! It’s an exciting time to transition to remote work. Working remotely has given me the freedom to plan my own schedule and expand my knowledge base and skills.",
            "isRead": true,
            "isDraft": true,
            "isStared": false,
            "sentAt": "6:31 PM",
            "to": "Aspen Mcbride",
            "from": "facilisi.sed.neque@protonmail.org",
            "type": "sent",
            "extended": false,
            "name": "shifra levaiv"
        },
        {
            id: utilService.makeId(),
            "subject": "going on a year long trip in my caravan",
            "body": "hey coding academy i wonderd if you would like to join me on a trip far far away, meeting people , and eating cheap food get back to me thanks",
            "isRead": true,
            "isDraft": true,
            "isStared": false,
            "sentAt": '17:38 PM',
            "to": "Aspen Mcbride",
            "from": "facilisi.sed.neque@protonmail.org",
            "type": "sent",
            "extended": false,
            "name": "guri alfi"
        },
        {
            id: utilService.makeId(),
            "subject": "How fast do programmers really code? Is it as fast as we see in the movies? Is that possible?",
            "body": "This depends on ones station in life.My personal story from 2008 was being at the top of money, power, and success. Six figure salary, equity, zero expenses; all paid for... I was 26 years old.Software engineer/computer scientist that found a way to apply all the science I knew and understood.I lived in HK, on top of the convention center plaza apartments on the 22nd floor — a 2 million dollar apartment paid for me by the company. Foreign travel perdiem expenses. My own office on the 11th floor Samsung building overlooking Victoria harbor. I was the branch manager, with my own employees.",
            "isRead": true,
            "isDraft": true,
            "isStared": false,
            "sentAt": '22:52 PM',
            "to": "Aspen Mcbride",
            "from": "facilisi.sed.neque@protonmail.org",
            "type": "sent",
            "extended": false,
            "name": "shimshon zehavi"
        },
        {
            id: utilService.makeId(),
            "subject": "Whats the biggest career mistake a software developer can make?",
            "body": "hey coding academy i wonderd if you would like to join me on a trip far far away, meeting people , and eating cheap food get back to me thanks",
            "isRead": true,
            "isDraft": true,
            "isStared": false,
            "sentAt": '18:44 PM',
            "to": "Aspen Mcbride",
            "from": "facilisi.sed.neque@protonmail.org",
            "type": "sent",
            "extended": false,
            "name": "yossi ben yosii"
        },
        {
            id: utilService.makeId(),
            "subject": "going on a year long trip in my caravan",
            "body": "hey coding academy i wonderd if you would like to join me on a trip far far away, meeting people , and eating cheap food get back to me thanks",
            "isRead": true,
            "isDraft": true,
            "isStared": false,
            "sentAt": '09:03 PM',
            "to": "Aspen Mcbride",
            "from": "facilisi.sed.neque@protonmail.org",
            "type": "sent",
            "extended": false,
            "name": "shalm koriat"
        },
        {
            id: utilService.makeId(),
            "subject": "האוניברסיטה הפתוחה: לימודים ועבודה במקום אחד, זה סוד הקסם. אז בואו לעבוד איתנו",
            "body": "עבודה במוקדי הלימודים האקדמיים כנציגים טלפונייםמימון לימודים מלא בהתאם לתנאי העסקה סביבה נעימה, משפחתית ודינמית תנאים פנסיוניים מהיום הראשון חניה חינם חדר כושר בעלות נמוכה חדר אוכל וקפטיריה חלבית והכי חשוב עבודה עם הרבה סיפוק",
            "isRead": false,
            "isDraft": true,
            "isStared": false,
            "sentAt": "11:15 PM",
            "to": "Abra Allen",
            "from": "openeu@google.org",
            "type": "sent",
            "extended": false,
            "name": "cristiano ronaldo"

        },
        {
            id: utilService.makeId(),
            "subject": "Which framework is better, W3.CSS or Bootstrap?",
            "body": "Sadly most of those who answered the question are not even aware of the fact that w3.css is a front end framework just like bootstrap.",
            "isRead": true,
            "isDraft": true,
            "isStared": true,
            "sentAt": "11:08 AM",
            "to": "William Romero",
            "from": "bibendum.ullamcorper.duis@google.ca",
            "type": "inbox",
            "extended": false,
            "name": "david"
        }

        ]
        console.log(mails)
        utilService.saveToStorage(EMAIL_KEY, mails);
    }
    return mails;
}

function createEmail(type = 'inbox', subject = 'demo subject', body = 'demo body', to = 'demo@email', from = 'demo name', name = 'nimrod') {
    const email = {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        isDraft: false,
        isStared: false,
        sentAt: randomDate(new Date(2020, 0, 1), new Date()),
        to,
        from,
        type,
        extended: false,
        name

    }
    return email;
}
function getUser() {
    return {
        email: 'nimrod@appsus.com',
        fullname: 'Mahatma Appsus'
    }
}


function setFilter(mails, text = '') {
    if (text === '') return
    var sortedMails = mails.filter((mail) =>
        mail.subject.includes(text)
    )
    return sortedMails
}

function mailFilterByType(type) {
    let mails = query().then(res => mails = res)
    console.log(mails);
}

// var filterdMails = mails.filter((mail) =>
//     mail.type.localCompare(type)
// )
// return filterdMails

