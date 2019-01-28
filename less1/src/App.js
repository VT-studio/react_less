import React, { Component } from 'react';

/*import my css*/
import './App.css';
/*css framework*/
import 'normalize.css';

/*import my json file*/
import names from './data/names';

/*import components (property)*/
import Users from './Users'


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
        users: names,
        value: true
    }


    render = ()=>
        <div className="wrap">
            <h1>Hello</h1>
            <input  onChange={this.filterUsers} type="text" name="SearchUser" id="" placeholder='search to user'/>
            {
                this.testF()
            }
        </div>



    filterUsers = (e) => {
        // console.log('TIC: ', e.target.value);

        let val = e.target.value.toLowerCase();

        let filterData = names.filter(nameUser=> {
           // переводим в нижний регистр
            let nameUserLowerCase = nameUser.name.toLowerCase();
            if (nameUserLowerCase.indexOf(val) !== -1) {
                return nameUser;
            }

        })

        this.setState({
            users: filterData,
            value: filterData.length == 0 ? false  :  true
        })
    }


    testF = () => {
        const { users, value } = this.state


            // return (
            //     /* альтернатива Иф, если валуе не фолс, то выводим делаем следующее */
            //     value && (
            //             users.map((nameUser, key) => {
            //                 // console.log(nameUser);
            //                 return (
            //                     <p key={nameUser.id}>{nameUser.name}</p>
            //
            //                 )
            //             })
            //
            //     )
            //
            //
            //
            // )

            if(value == true) {
                return (
                    /*Импортируем компонент и передаем в проперти значения*/
                    users.map( (nameUser, key) => <Users key = {key} user = {nameUser} />)

                // users.map((nameUser, key) =>
                // {
                //     console.log(nameUser);
                //     return (
                //         <p key={nameUser.id}>{nameUser.name}</p>
                //
                //
                //     )
                // })
                )
            }else{
                return (<p>Такого юзера нетc</p>)
            }


    }

}

// export default App;

export default NamesList;
