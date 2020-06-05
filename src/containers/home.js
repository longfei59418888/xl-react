import React from 'react';
import Tes from './test';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            itemList: [
                { name: 1, phone: 2 },
                { name: 2, phone: 3 },
                ],
        };
    }
    render() {
        return (
          <div>
              {this.state.itemList.map((item,index)=>{
                  return <div onChange={this.change.bind(this)}>
                      <p><input type="text" index={index} name={index+'_name'} value={item.name}/><input type="text" index={index} name='phone' value={item.phone}/></p>
                  </div>
              })}
          </div>
        );
    }
    change({target}){
        const {value,name} = target
        const index = target.getAttribute('index')
        let itemList = this.state.itemList
        itemList[index][name] = value
        this.setState({
            itemList
        })
    }
}

export default Home;
