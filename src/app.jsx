import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
     amountDue: '', amountReceived: '', changeDue: '$', className: 'alert alert-success text-center',
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
  calculateChange() {
    var due = parseFloat(this.state.amountDue);
    var received = parseFloat(this.state.amountReceived);
    var change = (received - due);
    
    var success = 'alert alert-success text-center';
    var danger = 'alert alert-danger text-center';

    if(change < 0) {
      this.setState({
        className: danger, 
        changeDue: 'Customer still owes $' + change.toFixed(2) });
    } else {
      this.setState({
        className: success,
        changeDue: 'The total change due is $' + change.toFixed(2) });
    
        //Calculate bills
    var billsTwenty = change / 20;
    var bills = change % 20;

    var billsTen = bills / 10;
        bills = bills % 10;

    var billsFive = bills / 5;
        bills = bills % 5;
  
    var billsOne = bills / 1;
        bills = bills % 1;

    //Calculate coins
    var remainder = bills * 100;
    var coins = Math.round(remainder);
    var coinsQuarter = coins / 25;
        coins = coins % 25;

    var coinsDime = coins / 10;
        coins = coins % 10;

    var coinsNickel = coins / 5
        coins = coins % 5;

    var coinsPenny = coins;

    this.setState({
      twenties:Math.floor(billsTwenty),
      tens:Math.floor(billsTen),
      fives:Math.floor(billsFive),
      ones:Math.floor(billsOne),
      quarters:Math.floor(coinsQuarter),
      dimes:Math.floor(coinsDime),
      nickels:Math.floor(coinsNickel),
      nickels:Math.floor(coinsNickel),
      pennies:Math.round(coinsPenny),
    })
  }
  }

  render() {
    return (
      <div className='container'>
        
        <div className='header'>
          <h2 className='text-light'>Change Calculator</h2>
          <hr className=''/>
        </div> 
        
        {/*Inputs for money due and money received*/} 
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

               {/*Calculate button*/} 
              <div className='card-footer'>
                <button onClick={ this.calculateChange } 
                        className='btn btn-primary btn-lg btn-block' 
                        type='submit' 
                        name='calculate'>Calculate
                </button>
              </div>
            </div>
            </div>

             {/*Outputs*/}

              {/*Alert*/}  
            <div className='col-8'>
              <div className='card' id='change-card'>
                <div className='card-body'>
                <div className='row'>
                  <div className='col-md'>
                    <div className={this.state.className}> {this.state.changeDue}
                    </div>
                  </div>
                </div>

                 {/*Bills and coins denominations*/} 
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