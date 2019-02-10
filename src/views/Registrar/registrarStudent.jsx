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
      
      let row = [ "35202-5440445-5",  "shaheer ghouri", "zohaibbutt@ucp.edu.pk", "+923224704185", "BSCS", "APPROVED", true]

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
            <h4 style={{display:"inline"}} className={classes.cardTitleWhite}>STUDENTS  <Button className={classes.button} onClick={this.handleClickOpen} >Add Student</Button>
           </h4>
          </CardHeader>
 
          <GridContainer>
                <GridItem xs={12} sm={12} md={6} lg={4}>
  
                  <Dialog
                    classes={{
                      root: classes.center,
                      paper: classes.modal
                    }}
                    open={this.state.classicModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClose()}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      id="classic-modal-slide-title"
                      disableTypography
                      className={classes.modalHeader}
                      color="info"
                    >
                      <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="info"
                        onClick={() => this.handleClose()}
                      >
                        <Close className={classes.modalClose} />
                      </IconButton>
                      <h4 className={classes.modalTitle} >Add Student</h4>
                    </DialogTitle>
                    
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >

                    <GridContainer>
                 
                  <GridItem xs={12} sm={12} md={7}>
                    <CustomInput
                      labelText="CNIC"
                      id="cnic"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onKeyUp: (event) => this.handleChange(event),
                        placeholder:"35202-1234567-8",
                    
                        
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                
                      id="regex"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value:this.state.regex,
                        disabled: true
                      }}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                    
                      labelText="Name"
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value:this.state.name,
                        disabled: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Fathername"
                      id="fathername"
                     
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value:this.state.fathername,
                        disabled: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Email address"
                      id="emailaddress"
                    
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value:this.state.email,
                        disabled: true
                      }}
                    />
                  </GridItem>
                </GridContainer>


                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Address"
                      id="address"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value:this.state.address,
                        disabled: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="City"
                      id="city"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value:this.state.city,
                        disabled: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Mobile"
                      id="mobile"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value:this.state.mobile,
                        disabled: true
                      }}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Matric Percentage"
                      id="matric"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value:this.state.matric,
                        disabled: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText=""
                      id=""
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        
                        disabled: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Inter Percentage"
                      id="inter"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value:this.state.inter,
                        disabled: true
                      }}
                    />
                  </GridItem>
                </GridContainer>



                    </DialogContent>

                    <DialogActions className={classes.modalFooter}>
                      <Button onClick={this.add} style={{color:"white", backgroundColor:"green"}} simple>
                        Add
                      </Button>
                      <Button
                        onClick={() => this.handleClose()}
                        style={{color:"white", backgroundColor:"red"}}
                        simple
                      >
                        Cancel
                      </Button>
                    </DialogActions>
                  </Dialog>
                </GridItem>
              </GridContainer>


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
