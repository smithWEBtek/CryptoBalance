import React, { Component } from 'react';
import CryptoCards from './CryptoCards'
import { Container, Row, Col,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Holdings from '../Portfolios/Holdings'
import CreatePortfolio from '../Portfolios/CreatePortfolio'
import Portfolios from '../Portfolios/Portfolios'

class Cryptos extends Component {

  constructor(props) {
      super(props);
      this.state = {
         dropdownOpen: false,
         showHoldings: false,
         showAddForm: false,
         currentPortfolio: [],
      };
    }

  toggle = () =>{
   this.setState({
     dropdownOpen: !this.state.dropdownOpen
   });
 }

toggleAddForm = () => {
  this.setState({
    showAddForm: true,
  });
}

toggleShowHoldings = (portfolio) => {
   console.log("Setting current portfolio of clicked:", portfolio)
   this.setState({
    showHoldings: true,
    currentPortfolio: portfolio,
    currentPortfolioID: portfolio.id,
  });
}

  render(){
    return (
      <Container>

        <Row>
          <Col xs="3">
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                Portfolios
              </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem  header>Dropdown header</DropdownItem>
                  <DropdownItem   onClick={this.toggleAddForm}>Add Portfolio</DropdownItem>
                  {/* THis renders a drop down list of the porfolios clcikable  */}
                  <Portfolios  toggleShowHoldings={this.toggleShowHoldings}/>
                </DropdownMenu>
            </ButtonDropdown>
            {/* THis is the form for adding new protfolio after clicking add portfolio */}
            <CreatePortfolio showForm={this.state.showAddForm} />
          </Col>
          {/* Section for rendering token and pricing cards */}
          <Col xs="8"><CryptoCards />
          </Col>
      </Row>
          <br/>
          {/* Will render the holdings of a particular portfolio */}
      <Holdings
        showHoldings={this.state.showHoldings}
        // SHOULD USE this.props.currentPOrtfilo from map state to props?
        currentPortfolio={this.state.currentPortfolio}
        />
      </Container>
    );
  }
};

  export default Cryptos;
