import './App.css';
import React, {Component} from 'react'
import AddRecipe from "./components/AddRecipe";


class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            recipes:[
                this.name = "test"

            ]
        }
    }


    handleAddRecipe(recipe){
        let recipes = this.state.recipes;
        recipes.push(recipe)
        this.setState({recipes:recipes});
    }


    render() {

    console.log(this.state.recipes)
    return (
    <div className="App">
        <AddRecipe addRecipe={this.handleAddRecipe.bind(this)}/>
1        {this.state.recipes.map(function(recipe, idx){
         return (<li key={idx}>{recipe.name}</li>)
                })}

    </div>
  );
    }


}


export default App;
