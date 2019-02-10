import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { Button } from "@material-ui/core";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
        
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },

};

class adminUniversity extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            table : [
              [ "issuer_deparmnt", "s150105", "APPROVED_BY_DEAN", "aaila", "2019-01-29", "Lahore"],
              [  "issuer_deparmnt", "s150105", "APPROVED_BY_DEAN", "alialia", "2019-01-29", "Lahore"]
             ]
        };
      }

      componentDidMount(){

        let btn = null;
        // let table = [];
        // this.state.table.forEach(ele => {
        //   console.log(ele[1])
        //     if(ele[1] !== "APPROVED")
        //     btn = <Button style={{color:"white", backgroundColor:"red",float:"left"}} onClick={this.handleClick} >Approve</Button>        
        //     else
        //     btn = <Button style={{color:"white", backgroundColor:"green",float:"left"}} >APPROVED</Button>        

        //   ele.push(btn);
        //   table.push(ele)
        // })


    
        // this.setState({
        //     table:table
        // })
      }

      handleClick = () =>{

        alert("agya")

      }

render(){
  const { classes } = this.props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info" >
            <h4 className={classes.cardTitleWhite}>DEGREE'S  </h4>
            
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="info"
              tableHead={[  "Department", "Student", "Status", "Issuer" , "Date", "City"]}
              tableData={this.state.table}

            />
          </CardBody>
        </Card>
      </GridItem>
      
          </GridContainer>
  );
}
}

export default withStyles(styles)(adminUniversity);
