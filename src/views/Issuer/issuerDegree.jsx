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
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";
import InputLabel from "@material-ui/core/InputLabel";


import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";


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
              [ "issuer_deparmnt", "s150105", "APPROVED_BY_DEAN", "imran_arshad", "2019-01-29",true],
              [  "issuer_deparmnt", "s150105", "APPROVED_BY_DEAN", "imran_arshad", "2019-01-29",true]
             ],
             search: null,
             classicModal: false,
             std: "",
             description: "",
             regex:"",
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
                row[5]=true
              }
              else
                row[5]=false
            
          return row;
              })

              this.setState({
                table:table
              })

              
      }

      handleChange = (e) => {
                  
                this.setState({
                  std:e.target.value,
                })
            
      }

      handleChange2 = (e) => {   
            
          this.setState({
            description:e.target.value,
          })
       
}

    handleClickOpen = () =>  {
      let obj = [...this.state]
      obj.classicModal = true;
       this.setState(obj);
 
     }

     handleClose = () =>{
      let obj = [...this.state]
      obj.classicModal = false;
      obj.std= "";
      obj.description= "";
      obj.regex="";
       this.setState(obj);
 
    }
    add = () =>{
      
      console.log(this.state)

      let row = [ "35202-5440445-5",  "shaheer ghouri", "zohaib.butt75@ucp.edu.pk", "+923224704185", "BSCS", true]

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
            <h4  style={{display:"inline"}} className={classes.cardTitleWhite}>DEGREE'S  <Button className={classes.button} onClick={this.handleClickOpen} >Add Degree</Button>
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
                      <h4 className={classes.modalTitle} >Add Degree</h4>
                    </DialogTitle>
                    
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >

                    <GridContainer>
                 
                  <GridItem xs={12} sm={12} md={7}>
                    <CustomInput
                      labelText="StudentID"
                      id="std"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onKeyUp: (event) => this.handleChange(event),
                        
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
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Description"
                      id="description"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: (event) => this.handleChange2(event),
                        multiline: true,
                        rows: 5
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
              tableHead={[  "Department", "Student", "Status", "Issuer" , "Date"  ]}
              tableData={ this.state.table.map(row => { return row[5] === true ? row.slice(0,5):[]}) }

            />
          </CardBody>
        </Card>
      </GridItem>
      
          </GridContainer>
  );
}
}

export default withStyles(javascriptStyles)(adminUniversity);
