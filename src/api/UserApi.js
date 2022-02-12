export default {
    login(email, password) {
        if (email === 'test@email.com') {
            return Promise.reject();
        }

        return Promise.resolve({
            id: 123,
            fullName: 'Harry Potter'
        });
    }
}
