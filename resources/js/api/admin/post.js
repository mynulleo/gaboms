/**
 * @param {int} id
 */
function getPost(id) {
    return axios.get('/admin', {
        params: {
            id : id
        }
    });
}

/**
 * @param {int} firstId
 * @param {int} secondId
 */
function promise(firstId, secondId) {
    return new Promise((resolve, reject) => {
        axios
            .post(`/admin/${firstId}`)
            .then((response) => {
                console.log("First Request...")
                console.log(response.data)
                axios
                    .get(`/admin/${secondId}`)
                    .then((response) => {
                        console.log("Second Request...")
                        console.log(response.data)
                        resolve(response)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export {
    getPost,
    promise
}
