import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
     amountDue: '', amountReceived: '', changeDue: 0,
     twenties: 0, tens: 0, fives: 0, ones: 0,
     quarters: 0, dimes: 0, nickels: 0, pennies: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
  }
  handleChange(event) {
    event.preventDefault(event);
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  calculateChange(){
    var due = parseFloat(this.state.amountDue);
    var received = parseFloat(this.state.amountReceived);
    var change = (received - due);
    this.setState({ changeDue: change.toFixed(2) });
    
    var billsTwenty = change / 20;
    var bills = change % 20;
    this.setState( {twenties:Math.floor(billsTwenty)});

    var billsTen = bills / 10;
        bills = bills % 10;
    this.setState( {tens:Math.floor(billsTen)});

    var billsFive = bills / 5;
    bills = bills % 5;
    this.setState( {fives:Math.floor(billsFive)});
  
    var billsOne = bills / 1;
    bills = bills % 1;
    this.setState( {ones:Math.floor(billsOne)});

    var remainder = bills * 100;
    var coins = Math.round(remainder);
    var coinsQuarter = coins / 25;
    coins = coins % 25;
    this.setState( {quarters:Math.floor(coinsQuarter)});

    var coinsDime = coins / 10;
    coins = coins % 10;
    this.setState( {dimes:Math.floor(coinsDime)});
    console.log(coins);

    var coinsNickel = coins / 5
    console.log('coinsNickel '+ coinsNickel);
    console.log(coins);
    coins = coins % 5;
    console.log('coinsNickel ' + coinsNickel)
    console.log(coins);
    this.setState( {nickels:Math.floor(coinsNickel)});

    var coinsPenny = coins;
    console.log(coinsPenny);
    this.setState( {pennies:Math.round(coinsPenny)});  
  }

  render() {
    return (
      <div className='container'>
        
        <div className='header'>
          <h2 className='text-light'>Change Calculator</h2>
          <hr className=''/>
        </div> 
        
        <div>
          <div className='row'>
            <div className='col-4'>
            <div className='card card-default'>
              <div className='card-header'>Enter Information</div>
              <div className='card-body'>
                <div className='form-group'>
                  <label><strong>How much is due?</strong></label>
                  <input onChange={ this.handleChange } 
                         defaultValue={this.state.amountDue} 
                         className='form-control'
                         type='number'
                         name='amountDue'
                         step='0.01' />
                         
                </div>
              <div className='form-group'>
                  <label><strong>How much was received?</strong></label>
                  <input onChange={ this.handleChange }
                         defaultValue={this.state.amountReceived}
                         className='form-control' 
                         type='number' 
                         name='amountReceived'
                         step='0.01'  />
              </div>
              </div>
              <div className='card-footer'>
                <button onClick={ this.calculateChange } 
                        className='btn btn-primary btn-lg btn-block' 
                        type='submit' 
                        name='calculate'>Calculate
                </button>
              </div>
            </div>
            </div>

            <div className='col-8'>
              <div className='card'>
                <div className='card-body'>
                <div className='row'>
                  <div onChange={ this.handleChange } className="alert alert-success text-center" name='changeDue' role='alert'>{this.state.changeDue}</div>
                </div>
                <div className="row">
                  <div className='col-md-3'><div className='card'><div className='card-body bg-light text-center' name='twenties'>  <h6>Twenties</h6> <p>{this.state.twenties}</p></div></div></div>
                  <div className='col-md-3'><div className='card'><div className='card-body bg-light text-center' name='tens'> <h6>Tens</h6> <p>{this.state.tens}</p> </div></div></div>
                  <div className='col-md-3'><div className='card'><div className='card-body bg-light text-center' name='fives' > <h6>Fives</h6> <p>{this.state.fives}</p> </div></div></div>
                  <div className='col-md-3'><div className='card'><div className='card-body bg-light text-center' name='ones'> <h6>Ones</h6> <p>{this.state.ones}</p> </div></div></div>
                </div>
                <div className='row'>
                  <div className='col-md-3'><div className='card'><div className='card-body bg-light text-center' name='quarters'> <h6>Quarters</h6> <p>{this.state.quarters}</p> </div></div></div>
                  <div className='col-md-3'><div className='card'><div className='card-body bg-light text-center' name='dimes'> <h6>Dimes</h6> <p>{this.state.dimes}</p></div></div></div>
                  <div className='col-md-3'><div className='card'><div className='card-body bg-light text-center' name='nickels'> <h6>Nickels</h6> <p>{this.state.nickels}</p> </div></div></div>
                  <div className='col-md-3'><div className='card'><div className='card-body bg-light text-center' name='pennies'> <h6>Pennies</h6> <p>{this.state.pennies}</p> </div></div></div>
                </div>
                </div>    
              </div>
          </div>
        </div>  
      
      </div>
      </div>

    );
  }
}

export default App;
