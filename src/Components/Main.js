import React from 'react'
import { useEffect, useState} from 'react'
import { Route, Switch } from "react-router-dom"


const Main = (props) => {

const [couple, setCouple] = useState (null)

const URL = "https://never-bored-couple-backend.herokuapp.com/"

const getCouple = async () => {
  const response = await fetch(URL)
  const data = await response.json();
  setCouple(data)
}

const createCouple = async (person) =>{
  // make post request to create people
  await fetch(URL, {
    method: "POST",
    headers: {
        "Content-Type": "Application/json",
    },
    body: JSON.stringify(person),
});
// update list of people
  getCouple();
}

useEffect(() => {
  getCouple();
}, []);


  return (
    <main>
      <Switch >
        <Route exact path ="/">

        </Route>
        <Route>

        </Route>
      </Switch>
    </main>
  )
}

export default Main;