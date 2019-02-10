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

import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";
import Slide from "@material-ui/core/Slide";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import { element } from "prop-types";


function Transition(props) {
  return <Slide direction="down" {...props} />;
}

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
              [ "BSCS",  true ,false],
              ["BSEE" , false, true]
             ],
              classicModal: false,
              person: ""

        };
      }

      componentDidMount(){

        let test = []
        let arr = ["ASHRAF IQBAL ",<br/>, "dean@ucp.edu.pk",<br/> ,"0420078601"]
        let arr1 = ["alailla",<br/>, "aailia@ucp.edu.pk",<br/> ,"0420078601"]
        this.state.table.forEach(element => {

          if(element[1] === false)
            {
              element[1] = <Button style={{color:"white", backgroundColor:"green",float:"left"}} onClick={() => {this.handleClickOpen("Dean")}} >Add Dean</Button>
            }
            else{
              element[1] = <b>{arr}</b>
            }
          
            if(element[2] === false)
            {
              element[2] = <Button style={{color:"white", backgroundColor:"green",float:"left"}} onClick={()=>{this.handleClickOpen("Issuer")}} >Add Issuer</Button>
            }
            else{
              element[2] = <b>{arr1}</b>
            }
          
            

            test.push(element)
        })

        this.setState({
            table:test
        })
      
      }
      handleClickOpen = (person) =>  {

        // department name blockchain ko table se send kruhga

        let obj = [...this.state]
        obj.classicModal = true;
        obj.person = "Add " + person;
         this.setState(obj);
   
       }
   
       handleClose = () =>{
         let obj = [...this.state]
         obj.classicModal = false;
          this.setState(obj);
    
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
            <h4 className={classes.cardTitleWhite}>DEPARTMENTS 
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
                      <h4 className={classes.modalTitle} >{this.state.person}</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >

                    <GridContainer>
                 
                  <GridItem xs={12} sm={12} md={7}>
                    <CustomInput
                      labelText="Name"
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      id="company-disabled"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: true
                      }}
                    />
                  </GridItem>
                </GridContainer>



                <GridContainer>
                 
                 <GridItem xs={12} sm={12} md={7}>
                   <CustomInput
                   labelText="Email address"
                      id="email-address"
                     formControlProps={{
                       fullWidth: true
                     }}
                   />
                 </GridItem>
                 <GridItem xs={12} sm={12} md={5}>
                   <CustomInput
                     id="company-disabled"
                     formControlProps={{
                       fullWidth: true
                     }}
                     inputProps={{
                       disabled: true
                     }}
                   />
                 </GridItem>
               </GridContainer>
               

               <GridContainer>
                 
                 <GridItem xs={12} sm={12} md={7}>
                   <CustomInput
                   labelText="Landline"
                      id="landline"
                     formControlProps={{
                       fullWidth: true
                     }}
                   />
                 </GridItem>
                 <GridItem xs={12} sm={12} md={5}>
                   <CustomInput
                     id="company-disabled"
                     formControlProps={{
                       fullWidth: true
                     }}
                     inputProps={{
                       disabled: true
                     }}
                   />
                 </GridItem>
               </GridContainer>



                    </DialogContent>

                    <DialogActions className={classes.modalFooter}>
                      <Button style={{color:"white", backgroundColor:"green"}} simple>
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
              tableHead={[ "Name", "Dean", "Issuer"]}
              tableData={this.state.table}

            />
          </CardBody>
        </Card>
      </GridItem>
      
          </GridContainer>
  );
}
}

export default withStyles(javascriptStyles)(adminUniversity);
