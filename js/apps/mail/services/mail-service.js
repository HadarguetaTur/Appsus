import { storageService } from '../../../service/async-storage-service.js';
import { utilService } from '../../../service/util-Service.js';

const EMAIL_KEY = 'emails';
_createEmails();

export const mailService = {
    query,
    remove,
    save,
    get,
    getUser
};

function query() {
    return storageService.query(EMAIL_KEY)
}

function remove() {
    return storageService.remove(EMAIL_KEY, mailId)
}

function get(mailId) {
    return storageService.get(EMAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) return storageService.put(EMAIL_KEY, mail)
    else return storageService.post(EMAIL_KEY, mail)
}

function _createEmails() {
    let mails = utilService.loadFromStorage(EMAIL_KEY);
    if (!mails || !mails.length) {
        mails = [];
        mails.push(_createEmail());
        mails.push(_createEmail());
        mails.push(_createEmail());
        mails.push(_createEmail());
        utilService.saveToStorage(EMAIL_KEY, mails);
    }
    return mails;
}

function _createEmail(subject = 'demo subject', body = 'demo body', sentAt = Date.now(), to = 'demo@email', from = 'demo name') {
    const email = {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        sentAt,
        to,
        from
    }
    return email;
}
function getUser() {
    return {
        email: 'user@appsus.com',
        fullname: 'Mahatma Appsus'
    }
}


