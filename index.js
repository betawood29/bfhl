const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const USER_ID = "kirandeep kaur";
const EMAIL = "kirandeep1744.be21@chitkara.edu.in";
const ROLL_NUMBER = "R2110991744";

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;
        
        if (!Array.isArray(data)) {
            throw new Error('Data must be an array');
        }

        const oddnumbers = ()=>{
            data.filter(item => typeof item === 'string' && !isNaN(item));
            if(item%2!=0){
                return item;
            }
        }
        const evennumbers = ()=>{
            data.filter(item => typeof item === 'string' && !isNaN(item));
            if(item%2==0){
                return item;
            }
        };
        const alphabets = ()=>{
            data.filter(item => typeof item === 'string' && isNaN(item) && item.length === 1);
            return item.toUpperCase();
        }
        

        res.status(200).json({
            is_success: true,
            user_id: USER_ID,
            email: EMAIL,
            roll_number: ROLL_NUMBER,
            odd_numbers: numbers,
            even_numbers: numbers,
            alphabets: alphabets
            
        });
    } catch (error) {
        res.status(400).json({ is_success: false, error: error.message });
    }
});

const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

