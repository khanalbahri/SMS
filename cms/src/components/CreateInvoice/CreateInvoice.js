import { React, useState } from 'react';
import { CssBaseline, Typography, Container, TextField, Paper, Button, IconButton, Grid } from '@material-ui/core';
import { useStyles } from "./styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {useDispatch} from "react-redux";
import {createInvoice} from "../../actions/invoices.js";

export default function CreateInvoice() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        customerName: "", salesman: "", items: ""
    })
    const [items, setItems] = useState([
        { itemName: "", costPrice: "", salePrice: "", quantity: "", discount: "" },
    ])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(createInvoice(formData));
    }

    const handleFormChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleItemChange = (index,event) => {
        const itemValues = [...items];
        itemValues[index][event.target.name] = event.target.value;
        setItems(itemValues);
        setFormData({...formData,items:items});
    }
    const handleAddItem = ()=> {
        setItems([...items,{ itemName: "", costPrice: "", salePrice: "", quantity: "", discount: "" }]);
    }

    const handleRemoveItem = (index) => {
        const itemValues = [...items];
        itemValues.splice(index,1);
        setItems(itemValues);
    }
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" className={classes.root} component="main">
                <Paper elevation={3}>
                    <Typography component="h1" variant="h5" className={classes.heading}>Create Invoice</Typography>
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Grid>
                            <TextField label="Customer Name" id="outlined-size-normal" variant="outlined" name="customerName" value={formData.customerName} onChange={handleFormChange} required />

                            <TextField label="Salesman" name="salesman" id="outlined-size-normal" variant="outlined" value={formData.salesman} onChange={handleFormChange} />

                            <IconButton color="primary" style={{ marginTop: "10px" }} onClick={handleAddItem}>
                                <AddIcon />
                            </IconButton>
                        </Grid>
                        {items.map((item, index) => (
                            <Grid key={index}>
                                <TextField name="itemName" label="Item Name" id="outlined-size-normal" variant="outlined" size="small" value={item.itemName} onChange={event => handleItemChange(index,event)} required />
                                <TextField name="costPrice" label="C.Price" type="number" id="outlined-size-normal" variant="outlined" size="small" value={item.costPrice} onChange={event => handleItemChange(index,event)} required />
                                <TextField name="salePrice" label="S.Price" type="number" id="outlined-size-normal" variant="outlined" size="small" value={item.salePrice} onChange={event => handleItemChange(index,event)} required />
                                <TextField name="quantity" label="Qunatity" type="number" id="outlined-size-normal" variant="outlined" size="small" value={item.quantity} onChange={event => handleItemChange(index,event)} required />
                                <TextField name="discount" label="Discount" type="number" id="outlined-size-normal" variant="outlined" size="small" value={item.discount} onChange={event => handleItemChange(index,event)} required />
                                <IconButton color="secondary" onClick={()=> handleRemoveItem(index)}>
                                    <RemoveIcon />
                                </IconButton>
                            </Grid>
                        ))}
                        <Grid>
                            <Button variant="contained" color="primary" type="submit" style={{margin:"10px"}}>Submit</Button>
                            <Button variant="contained" color="secondary" type="submit">Clear</Button>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </>
    )
}
