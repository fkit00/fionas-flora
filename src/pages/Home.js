import { useAuth0 } from '@auth0/auth0-react'

function Home (){
    const { user } = useAuth0();
    const { name } = user;

    console.log(name)
    console.log(user)

    return(    <div> <h2>It's time to water {name}!</h2>
    
  </div>)
}

export default Home