import React, { Component } from 'react'; // destucruring, чтобы потом удобно было использовать
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';

//КАК ЭТО РАБОТАЕТ
//Каждый раз, когда мы что-то вводим, это автоматически попадает в onChange tag в SearchBox.js, затем это передается в searchChange и ,соответственно, затем в onSearchChange(), которое передает введеное в searchfield
// затем, в зависимости от того, что в serachfield, фильтруется список роботов
// т.е. сначала SearchBox сообщает инфу вверх App.js, а затем App.js передаёт изменения в CardList.js
class App extends Component {
    // ВСТАВИМ STATE
    constructor(){
        super() // calls the constructor of Component
        this.state = { //state is something that can change and affect our app; it has 2 states: robots and searchfield
            //если функция ничего не передает, то мы не делаем this.state = state (котоой нет), а просто так указываем
            robots: [],
            // раньше было так: robots: robots, // создаем дубликат роботов в объекте state, который потом будет фильтровать через .filter()
            searchfield: ''
        } // virtual DOM is just a JS object. Virtual DOM is an object that collects the state and React uses this state to render and pass them down as props to the components which are pure function and the components render it
        console.log('constructor');
    } // state.robots в данном примере можно не делать, а использовать просто robots, но в других надо, поэтому надо всегда так

    // ЗАГРУЗИМ ВЕСЬ СПИСОК РОБОТОВ СО СТОРОННЕГО САЙТА
    componentDidMount(){ // no arrow functions sinde it's a part of React
        // идет по ссылке, получает response, этот response загоняет в .json(), затем оттуда users приписывает переменной robots
        fetch('https://jsonplaceholder.typicode.com/users') // fetch is a part of Window object, that's why nothing is attached to it
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
        console.log('componentDidMount') // в консоли выдаст constructor-render-componentDidMount-render
        // render запустится во второй раз, потому что мы updated the state
    }

    // ЗАПОЛНИМ SEARCFIELD ВВЕДЕННОЙ ИНФОРМАЦИЕЙ
    // введенная информация идет по пути: onChange > searchChane >> onSearchChange 
    onSearchChange = (event) => { // обязательно в таких случаях использовать arrow function, иначе будет ошибка
        this.setState({ searchfield: event.target.value}) // setState() это метод React, его нужно использовать, чтобы изменять state
        console.log(event.target.value); // gives us the value of the search item
    }
    // ОТФИЛЬТРУЕМ РОБОТОВ ПО ИМЕНИ СОГЛАСНО ВВЕДЕННОЙ ИНФЕ В SEARCHFIELD И ВЫВЕДЕМ РЕЗУЛЬТАТ
    render() { //render обязателен для Component и он обязательно должен return 
        const { robots, searchfield } = this.state; // сделаем destructuring чтобы писать потом не this.state.robots, а просто robots
        const filteredRobots = robots.filter(robot => {
            //if the name of the robots in lower case includes (встроенная функция) то, что в searchfield в lower case
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()) //переведем все в lower case - good for comparison
        })
        console.log('render');
        // НА СЛУЧАЙ, ЕСЛИ НЕТ РОБОТОВ (ИЛИ НЕ ЗАГРУЗИЛИСЬ), ВЫДАДИМ LOADING
       return !robots.length ? // ternary operator + !; то же самое, что if (robots.length === 0) return... else
        <h1 className='tc'> Loading </h1> :
         (
                <div className=' tc'> {/* tc - text centered */}
                    <h1 className='f1'>RoboFriends</h1>
                    {/* onChange=searchChange=this.onSearchChange */}
                    {/*  onChange получает то, что вводим, присваивает это searchChange, и это автоматически присваивается onSearchChange */}
                    <SearchBox searchChange={this.onSearchChange}/> {/* SearchBox component */}
                    {/* Scroll component for wrapping the cardlist - чтобы был в топе при прокрутке вниз. Раз создав любой компонент, его можно использовать во многих местах - в этом сила React */}
                   {/* ЗАВЕРНЕМ CARDLIST (будет children) В SCROLL */}
                    <Scroll> 
                        <CardList robots={filteredRobots}/> {/* вместо обычного {robots}  */}
                    </Scroll>
                </div>
        );
    }
}

export default App; // export default - экспортируется целиком