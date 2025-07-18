import React, { createElement as h } from "../lib/react.js"
import { PlanetItem } from "../components/planet/PlanetItem.js"
import { PlanetList } from "../components/planet/planetList.js"
import { listData } from "../data/data.js"



export class PlanetPage extends React.Component {

  render(){
    return h(
      PlanetList,
      { 
       lang:'en',
      },
      listData.items.map(({id, title})=> h(PlanetItem,{ key:id, id,title }))
    )
  }
}