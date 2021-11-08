
import {React,useState} from 'react'
import { Button,Modal} from 'react-bootstrap'
const AddMovie=({Add})=> {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //bech na3mlou new movie state w n7otou feha les input
const [newMovie,setNewMovie]=useState( {
    name: '',
    description:'',
    rating:'',
    image:''
});
const { name,description,rating,image}=newMovie
const change=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value} )
};
const addNew =()=>{
    Add(newMovie)
    setNewMovie({
        name: '',
        description:'',
        rating:'',
        image:'', 
    })
    handleClose()
}
  return (
    <>
      <Button  variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <label>Name:</label>
                <input type=" text" name ="name" onChange= {(e)=>change(e)} />
                <label>Description:</label>
                <input type=" text" name= "description"onChange= {(e)=>change(e)}/>
                <label>Rating:</label>
                <input type=" text" name="rating"onChange= {(e)=>change(e)}/>
                <label>Image:</label>
                <input type=" text" name="image"onChange= {(e)=>change(e)}/>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addNew()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddMovie
