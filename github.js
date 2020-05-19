class Github {
    constructor() {
        this.client_id = '4697e12a0cd0cc2a15a7';
        this.client_secret = 'fcbe9b7bbc934df2d907b16ef8a0dad4e800dd61';
        this.repos_count = 5;
        this.repo_sort = 'created:asc'
    }

    async getUser(user) {
        const ProfileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repo_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profileData = await ProfileResponse.json();
        const repoData = await repoResponse.json();
        return {
            profileData,
            repoData
        }
    }

}