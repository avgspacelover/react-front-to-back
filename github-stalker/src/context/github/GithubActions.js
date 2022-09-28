


const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const searchUsers = async(text) => {

    //setLoading()

    const params = new URLSearchParams({
        q:text
    })
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        
        mode: 'cors',
        
        headers : {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    console.log('works',response)

    const {items} = await response.json()


    // dispatch({
    //     type: 'GET_USERS',
    //     payload: items
    // })

    //setUsers(data) ;
    //setLoading(false)

    return items;
}



export const getUser = async(login) => {
    console.log("HEYYYY")
    //setLoading()
    

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
        
        mode: 'cors',
        
        headers : {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    if(response.status===404){
        window.location= '/notfound'
    } else {
        const data = await response.json()

        console.log('user-data', data)

        // dispatch({
        //     type: 'GET_USER',
        //     payload: data
        // })

        return data;

    }

}

export const getUserRepos = async (login) => {
    //setLoading()

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    })

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    )

    const data = await response.json()

    // dispatch({
    //   type: 'GET_REPOS',
    //   payload: data,
    // })

    return data;
  }
