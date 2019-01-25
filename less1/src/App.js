import React, { Component } from 'react';

/*import my css*/
import './App.css';
/*css framework*/
import 'normalize.css';

/*import my json file*/
import names from './data/names';

console.log(names);


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello</h1>
//       </div>
//     );
//   }
// }


class NamesList extends Component{

    /*Импортим внешние данные */
    state = {
        users: names
    }


    filterUsers = (e) => {
        console.log('TIC: ', e.target.value);

        let val = e.target.value.toLowerCase();

        let filterData = names.filter(nameUser=> {
           // переводим в нижний регистр
            let nameUserLowerCase = nameUser.name.toLowerCase();
            if (nameUserLowerCase.indexOf(val) !== -1) {
                return nameUser;
            }

        })

        this.setState({
            users: filterData
        })
    }

    render = ()=>
        <div className="wrap">
        <h1>Hello</h1>
            <input  onChange={this.filterUsers} type="text" name="SearchUser" id="" placeholder='search to user'/>
            {
                this.testF()
            }
        </div>


    testF = () => {
        const { users } = this.state

        return (
            users.map((nameUser, key) => {
                console.log(nameUser);
                return (
                    <p key={nameUser.name}>{nameUser.name}</p>

                )
            })
        )

    }

}

// export default App;

export default NamesList;
