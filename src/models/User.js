class User {
    constructor(name, username, avatar) {
        this.name = name
        this.username = username
        this.avatar = { tmdb: {avatar_path: avatar}}
    }
}

export default User;