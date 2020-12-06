import './App.css';
import React,{useState} from 'react';
const styles = {
  formstyle:
  {
    marginTop:20,
   
  },
  item:{
    display:'block',
    padding:15,
   
  },
  input:{
   marginTop:5,
    width:'20%', 
    height:30
    
  },
  inputbox:{
    width:'100%',
    height:'100%'
  },
  

}
function App() {
  const [form,setform] = useState({
    id:'RQ1023640',
    issueType:'Hardware and device',
    issueDescription:'Computer Not Opening',
    assigneeComments:'',
    status:'open',
    ownercomments:''
  })
  return (
    <div className = "form" style = {styles.formstyle}>
   <form  >
   
     <h1>Ticket Handler</h1>
  <label htmlFor="ticketID" style = {styles.item} >
    Ticket ID: 
    <div style = {styles.input}>
    <input type="text" name="ticketID" style={styles.inputbox} value = {form.id} disabled/>
    </div>
  </label>
  <label htmlFor="IssueType" style = {styles.item}>
    Issue Type:
    <div style = {styles.input}>
    <input type="text" name="IssueType" style = {styles.inputbox} value = {form.issueType} disabled />
    </div>
  </label>
  <label htmlFor="IssueDescription" style = {styles.item}>
     Issue Description:
     <div style = {styles.input}>
    <textarea id="IssueDescription" name="IssueDescription" rows="4" cols="50" style = {styles.inputbox} value = {form.issueDescription} disabled > </textarea>
    </div>
  </label>
  <label htmlFor="AssigneeComments" style = {styles.item}>
     Assignee Comments:
     <div style = {styles.input}>
    <textarea id="AssigneeComments" name="AssigneeComments" rows="4" cols="50"  style = {styles.inputbox} value = {form.issueDescription} disabled> </textarea>
    </div>
  </label>
  <label htmlFor="Status" style = {styles.item}>
    Status:
    <div style = {styles.input}>
    <input type="text" name="Status" style = {styles.inputbox} value = {form.status} disabled/>
    </div>
  </label>
  
  <label htmlFor="AssigneeComments" style = {styles.item}>
     Assignee Comments:
     <div style = {styles.input}>
    <textarea id="AssigneeComments" name="AssigneeComments" rows="4" cols="50"  style = {styles.inputbox} value = {form.ownercomments} 
    onChange = 
    {
     (e)=>{
       var com =  e.target.value
       setform({...form,ownercomments:com})
       console.log(form.ownercomments)
     }       
    } 
    > </textarea>
    </div>
  </label>
  <input type="submit" value="Submit" style = {{marginLeft:15,height:40,marginTop:20}} />
   </form>
    </div>
  );
}

export default App;
