module.exports = {
    NotFoundError: class NotFoundError extends Error {
        constructor(message = 'В доступе отказано: обратитесь к администратору - rm1f6@ukrservice.biz') {
            super(message);

            this.name = 'NotFoundError';
            this.status = 404;
        }
    }
}