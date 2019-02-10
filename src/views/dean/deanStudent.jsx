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
             classicModal: false,
              name: "",
              fathername: "",
              email:"",
              address:"",
              mobile:"",
              city:"",
              matric:"",
              inter:"",
              regex:"",

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

      handleChange = (e) => {
        var code = e.keyCode || e.which;
        var reg = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;

        if(e.target.value.length > 15)
            e.target.value = e.target.value.slice(0,15)
        if(code === 13 || e.target.value.length === 15){
          
          if(reg.test(e.target.value) ){
    
this.setState({
  name:"a",
  fathername: "z",
              email:"a",
              address:"a",
              mobile:"a",
              city:"a",
              matric:"s",
              inter:"s",
              regex:""
})
        }
          else{

            this.setState({
              regex:"CNIC format is not correct",
              name: "",
              fathername: "",
              email:"",
              address:"",
              mobile:"",
              city:"",
              matric:"",
              inter:"",
            })


          }
      }

     

      }


    handleClickOpen = () =>  {
      let obj = [...this.state]
      obj.classicModal = true;
       this.setState(obj);
 
     }

     handleClose = () =>{
      let obj = [...this.state]
      obj.classicModal = false;
      obj.name= "";
      obj.fathername= "";
      obj.email="";
      obj.address="";
      obj.mobile="";
      obj.city="";
      obj.matric="";
      obj.inter="";
      obj.regex="";
       this.setState(obj);
 
    }
    add = () =>{
      
      let row = [ "35202-5440445-5",  "shaheer ghouri", "zohaib.butt75@ucp.edu.pk", "+923224704185", "BSCS", "APPROVED", true]

      let table = [...this.state.table,row]
      this.setState({
        table:table,
        classicModal:false
      })
    }

render(){
  const { classes } = this.props;



  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info" >
            <h4 style={{display:"inline"}} className={classes.cardTitleWhite}>STUDENTS    </h4>
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

export default withStyles(javascriptStyles)(adminUniversity);
