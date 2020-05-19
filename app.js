// class initalize

const git = new Github;

const ui = new UI

const searchUser = document.getElementById('searchUser').addEventListener('keyup', (e) => {
    const userText = e.target.value


    if (userText !== '') {
        git.getUser(userText).then((data) => {
            if (data.profileData.message === 'Not Found') {
                // show alert
                ui.showAlert('user not found', 'alert alert-danger')
            } else {


                //show profile
                ui.uiShowprofile(data.profileData)

                ui.showRepos(data.repoData)


            }
        })

    } else {
        ui.clearProfile();
    }

})