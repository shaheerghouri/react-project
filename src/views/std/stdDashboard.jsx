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
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Search from "@material-ui/icons/Search";
import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";


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
              [ "issuer_deparmnt", "150105", "APPROVED_BY_DEAN", "ali", "2019-01-29", "Lahore",true],
              [  "issuer_deparmnt", "150105", "APPROVED_BY_DEAN", "aliali", "2019-01-29", "Lahore",true]
             ],
             search: null
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
      search = () =>{

        let table =  this.state.table.map(row => {
             if(row.includes(this.state.search)){
               row[6]=true
             }
             else
               row[6]=false
           
         return row;
             })

             this.setState({
               table:table
             })

             
     }

     handleChange = (e) => {
       var code = e.keyCode || e.which;
       
       if(code === 13){
        if(e.target.value !== "")
         this.search()  
       
       }
       else{

       this.setState({
         search: e.target.value
     })
   }

     }

render(){
  const { classes } = this.props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info" >
            <h4  style={{display:"inline"}} className={classes.cardTitleWhite}>DEGREE'S  </h4>
           
                 
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="info"
              tableHead={[  "Department", "Student", "Status", "Issuer" , "Date", "City"]}
              tableData={ this.state.table.map(row => { return row[6] === true ? row.slice(0,6):[]}) }

            />
          </CardBody>
        </Card>
      </GridItem>
      
          </GridContainer>
  );
}
}

export default withStyles(headerLinksStyle)(adminUniversity);
