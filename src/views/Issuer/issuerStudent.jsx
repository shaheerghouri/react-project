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
import Search from "@material-ui/icons/Search";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";
import { element } from "prop-types";


import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
// core components
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";


function Transition(props) {
  return <Slide direction="down" {...props} />;
}



class adminUniversity extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            table : [  [ "35202-5440445-5",  "Zohaib Sohail", "zohaib.butt75@ucp.edu.pk", "+923224704185", "BSEE", "APPROVED", true],
            [ "35202-5440445-5",  "Zohaib Butt", "zohaib.butt75@ucp.edu.pk", "+923224704185", "BSCS", "APPROVED", true],
            [ "35202-5440445-5",  "Zohaib BUTT", "zohaib.butt75@ucp.edu.pk", "+923224704185", "BSEE", "APPROVED", true],
            [ "35202-5440445-5",  "Zohaib Sohail", "zohaib.butt75@ucp.edu.pk", "+923224704185", "BSCS", "APPROVED", true],
          ],
             search: null,
            
        };

      }

      componentDidMount(){



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
            <h4 style={{display:"inline"}}className={classes.cardTitleWhite}>STUDENTS  </h4>
            <div id="divSearch" style={{  float:"right"}} className={classes.searchWrapper}>
          <CustomInput 
            formControlProps={{
              className: classes.margin + " " + classes.search 
            }}
            inputProps={{
              onKeyUp: (event) => this.handleChange(event),
              id:"input",
              type:"string",
              className: classes.label + " " + classes.underline,
              placeholder: "Search",
              inputProps: {
                "aria-label": "Search",
              },
            }}

          />
          <Button onClick={this.search} style={{color:"white"}} color="white" aria-label="edit" justIcon round>
            <Search />
          </Button>
        </div>

          </CardHeader>


          <CardBody>
            <Table
              tableHeaderColor="info"
              tableHead={["CNIC", "Name", "Email", "Mobile", "Department", "Degree Status"]}
              tableData={ this.state.table.map(row => { return row[6] === true ? row.slice(0,6):[]})  }

            />
          </CardBody>
        </Card>
      </GridItem>
      
          </GridContainer>
  );
}
}

export default withStyles(headerLinksStyle)(adminUniversity);
